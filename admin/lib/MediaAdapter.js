const { Storage } = require('@google-cloud/storage')
const gcskeyfile = './configs/gcskeyfile.json'

const {
  storage: { assetUrlBase, bucket },
} = require('../configs/config')

const MediaAdapter = class {
  constructor(originalFileName, newFileName, id, gcskeyfilePath = gcskeyfile) {
    console.log('THE gcskeyfile Path:', gcskeyfilePath)
    if (!gcskeyfilePath) {
      throw new Error(
        'GCSAdapter needs you specifies GOOGLE_APPLICATION_CREDENTIALS, should be a string path'
      )
    }
    process.env.GOOGLE_APPLICATION_CREDENTIALS = gcskeyfilePath
    this.storage = new Storage()
    this.bucket = this.storage.bucket(bucket)
    this.assetUrlBase = assetUrlBase
    this.originalFileName = originalFileName
    this.newFileName = newFileName
    this.meta = {}
    this.id = id
    // this.firebaseDir = 'https://YOYO'
  }

  // _uploadToGCS(stream, filename) {
  //   const gcsUploadPath = `${this.assetUrlBase}${filename}`
  //   const file = this.bucket.file(gcsUploadPath) //get the upload path
  //   const write = file.createWriteStream()
  // }
}

module.exports = { MediaAdapter }
