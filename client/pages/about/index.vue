<template>
  <div class="about-page main-section page">
    <div id="info" />
    <div class="about-page__title main-title">關於井然</div>
    <div class="about-page__info">
      <div class="about-page__info_image">
        <img :src="about.info.image.urlOriginal" :alt="about.info.image.name" />
      </div>

      <div class="about-page__info_text text">
        攝影是種保留瞬間的技藝，感動的時刻是稍縱即逝無法重來的，<br />
        婚禮一輩子只有一次，<br />
        當天過了就只剩下禮金簿與漸漸消失的回憶還留著。<br />

        婚禮攝影最難的就是畫面無法重來，<br />
        也許是新娘害羞的表情，新郎期盼的神情，<br />
        儀式中重要的片刻，父母感動的淚水，<br />
        賓客開心的笑顏，這些是婚禮中最美好的回憶。<br />
        喜歡紀錄幸福時光，側寫當天新人沒有注意到的畫面，<br />
        只要新人看到作品後能夠感動就是我最大的成就！<br />
        我不是世界上最好的攝影師，<br />
        但我會用盡心力去捕捉這美好的一天！<br />
        用心記錄感動時刻，替您捕捉一輩子一次的畫面！
      </div>
    </div>

    <div id="photographer" class="about-page__title main-title">攝影師井然</div>
    <div class="about-page__photographer">
      <div class="about-page__photographer_image">
        <img
          :src="about.photographer.image.urlOriginal"
          :alt="about.photographer.image.name"
        />
      </div>

      <div class="about-page__photographer_text text">
        世新平面傳播學系 + 世新圖文傳播研究所畢業<br />
        退伍後當過幾年相機影像工程師，但最後還是回到攝影這條路。<br />
        <br />

        SJ Wedding 鯊魚影像團隊－攝影總監。<br />
        <br />

        WPPI 國際婚禮人像攝影協會獲獎攝影師。<br />
        ISPWP國際專業婚禮攝影師協會獲獎攝影師。<br />
        WPJA國際婚禮攝影記者協會獲獎攝影師。<br />
        AG|WPJA 國際婚禮攝影藝術協會獲獎攝影師。<br />
        Fearless Awards獲獎攝影師。<br />
      </div>
    </div>

    <div id="gear" class="about-page__title main-title">使用器材</div>
    <div class="about-page__gear">
      <div class="about-page__gear_image">
        <img :src="about.gear.image.urlOriginal" :alt="about.gear.image.name" />
      </div>
      <div class="about-page__gear_text text">
        機身<br />
        Sony A7R4<br />
        Sony A9M2<br />
        Sony A9<br />
        <br />
        鏡頭<br />
        Zeiss Batis 40mm F2<br />
        Sony 12-24mm F4<br />
        Sony 24-70mm F2.8<br />
        Sony 70-200mm F2.8<br />
        Sony 35mm F1.8<br />
        Sony 55mm F1.8<br />
        Sony 85mm F1.8<br />
        Sony 90mm F2.8<br />

        <br />
        燈光器材<br />
        Profoto A1 & B10 ;<br />
        WESTCOTT ICE LIGHT 2<br />

        <br />
        影像後製軟硬體<br />
        MAC Pro + PROMISE Pegasus R6<br />
        NEC MultiSync LCD-PA272W ＋ X-rite ColorMunki<br />
        Wacom 繪圖板<br />
        Adobe Lightroom<br />
        Adobe Photoshop<br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: {
        info: {
          image: {
            id: 0,
            name: '井然',
            urlOriginal: require('@/static/images/about/002.jpg'),
          },
        },
        photographer: {
          image: {
            id: 0,
            name: 'cosmo',
            urlOriginal: require('@/static/images/about/cosmo.jpg'),
          },
        },
        gear: {
          image: {
            id: 0,
            name: '設備',
            urlOriginal: require('@/static/images/about/gear.jpg'),
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.about-page {
  background: white;
  min-height: 50vh;

  .text {
    color: $color-main-dark-gray;
  }

  &__title {
    margin-top: 50px;
  }

  &__info {
    &_image {
      max-width: 500px;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_text {
      padding: 30px 0;
      text-align: center;
      line-height: 2;
      font-size: 14px;
    }
  }

  &__photographer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    // tablet range
    @include media-breakpoint-up(md) {
      flex-direction: row;
    }

    &_image {
      max-width: 400px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_text {
      padding: 30px 0;
      line-height: 2;
      font-size: 14px;
    }
  }

  &__gear {
    &_image {
      max-width: 400px;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_text {
      padding: 30px 0;
      text-align: center;
      line-height: 2;
      font-size: 14px;
    }
  }

  #info {
    position: absolute;
    top: -50px;
    left: 0;
  }
}
</style>
