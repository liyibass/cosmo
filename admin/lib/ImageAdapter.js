const { MediaAdapter } = require('./MediaAdapter.js')
const fs = require('fs')
const {
  storage: { imageUrlBase },
} = require('../configs/config')
const { resolve } = require('path')

const { getNewFilename } = require('../utils/getNewFilename')

const resizeTarget = {
  mobile: { height: 450, width: 800 },
  tablet: { height: 675, width: 1200 },
  desktop: { height: 713, width: 1268 },
}

class ImageAdapter extends MediaAdapter {
  constructor(...args) {
    super(...args)
    this.meta = { url: {} }
  }

  async uploadImages(stream) {
    await this.saveOriginalImage(stream)
    console.log('saveOriginalImage done')
    // await this.saveVariusSizeImages(stream)
    this._deleteLocalTempFile(this.originalFileName)
  }

  saveOriginalImage(stream) {
    return new Promise(async (resolve, reject) => {
      try {
        // Upload image to GCS
        await this._uploadImageToGCS(stream, this.newFileName)
        console.log('_uploadImageToGCS done')
        // create url
        this._generateCorrespondingUrl(this.newFileName)
        console.log('_generateCorrespondingUrl done')

        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  saveVariusSizeImages(stream) {
    return new Promise(async (rosolve, reject) => {
      try {
        for (const key in resizeTarget) {
          // generate resized filename
          const resized_filename = this._generateResizedFilename(
            this.newFileName,
            key
          )
          // Upload image to GCS
          //   this._uploadImageToGCS(stream, resized_filename)
          // Create url which link to GCS
          this._generateCorrespondingUrl(resized_filename, key)
          rosolve()
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  _deleteLocalTempFile(originalFileName) {
    const localTempFilePath = `./public/images/${originalFileName}`
    fs.unlink(localTempFilePath, (err) => {
      if (err) {
        throw err
      }
      console.log(`${localTempFilePath} is deleted`)
    })
  }

  async delete(oldFileName) {
    console.log('===delete in image adapter===')
    let imageList = []

    const gcsOriginalImgDir = `${imageUrlBase}${oldFileName}`
    imageList.push(gcsOriginalImgDir)

    imageList.forEach(async (gcsImageDir) => {
      console.log(gcsImageDir)
      await this.bucket.file(`${gcsImageDir}`).delete()
      console.log(`gs://${gcsImageDir} deleted.`)
    })
  }

  _generateResizedFilename(newFileName, key) {
    const name = newFileName.split('.')[0] //id-AA
    const ext = newFileName.split('.')[1] //.png

    // id-AA-moblie.png
    return `${name}-${key}.${ext}`
  }

  _generateCorrespondingUrl(fileName, key) {
    switch (key) {
      case 'mobile':
        this.meta.url.urlMobileSize = `${this.assetUrlBase}${imageUrlBase}${fileName}`
        break
      case 'tablet':
        this.meta.url.urlTabletSize = `${this.assetUrlBase}${imageUrlBase}${fileName}`
        break
      case 'desktop':
        this.meta.url.urlDesktopSize = `${this.assetUrlBase}${imageUrlBase}${fileName}`
        break
      default:
        this.meta.url.urlOriginal = `${this.assetUrlBase}${imageUrlBase}${fileName}`
        break
    }
  }

  _uploadImageToGCS(stream, fileName) {
    return new Promise((resolve, reject) => {
      const gcsUploadPath = `${imageUrlBase}${fileName}`
      const file = this.bucket.file(gcsUploadPath) //get the upload path
      const write = file.createWriteStream()

      stream.pipe(write)

      write
        .on('finish', () => {
          console.log(`${fileName} has been uploaded to gcs`)
          resolve()
        })
        .on('error', (err) => {
          console.log(`something was wrong when uploading ${fileName}`, err)
          reject()
        }) //resize and upload //resize and upload
    })
  }
}

module.exports = { ImageAdapter }
