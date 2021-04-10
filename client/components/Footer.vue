<template>
  <div class="footer">
    <div class="footer__card_container">
      <div class="footer__card footer__contact">
        <h6 class="footer__card_title">聯絡方式</h6>

        <div class="footer__card_text">
          <p>井然婚紗攝影團隊</p>
          <p>統一編號：12345678</p>
          <p>洽詢電話：+886-975-111-222</p>
          <p>官方Lind ID ：qwerty</p>
          <p>官方IG：asdfg</p>
          <p>官方信箱：asdf@gmail.com</p>
          <br />
          <p>-聯絡時間-</p>
          <p>每週一至週五, 9:00-18:00</p>
          <br />
        </div>

        <h6 class="footer__card_title">關注我們</h6>
      </div>

      <div class="footer__card footer__contact">
        <h6 class="footer__card_title">經歷</h6>
      </div>

      <div class="footer__card footer__contact">
        <h6 class="footer__card_title">用關鍵字找作品</h6>
      </div>

      <div class="footer__card footer__contact">
        <h6 class="footer__card_title">最新作品</h6>

        <ul class="footer__card_text">
          <li>台北萬豪酒店</li>
          <li>台北東方酒店</li>
          <li>173</li>
          <li>台北101</li>
        </ul>
      </div>
    </div>

    <div class="footer__info">
      <p>Copyright 井然婚攝</p>
      <p>婚禮攝影｜婚禮紀錄｜婚禮推薦｜自助婚紗</p>
      <p>-design by liyi</p>
    </div>
  </div>
</template>

<script>
export default {
  // data(){
  //     return{
  //         contactList:{
  //         }
  //     }
  // }
}
</script>

<style lang="scss" scoped>
.footer {
  background: $color-main-light-gray;
  width: 100%;
  &__card_container {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    flex-wrap: wrap;
    max-width: 500px;
    margin: auto;

    // tablet range
    @include media-breakpoint-up(md) {
      max-width: 800px;
    }

    // desktop range
    @include media-breakpoint-up(xl) {
      max-width: 1100px;
    }
  }

  &__card {
    width: 100%;
    padding: 20px 44px;
    margin: 12px 12px 0;
    color: $color-main-dark-gray;
    background: white;

    // tablet range
    @include media-breakpoint-up(md) {
      //   flex: 1;
      width: calc((100% - 48px) / 2);
      padding: 20px 24px;
    }

    // desktop range
    @include media-breakpoint-up(xl) {
      width: calc((100% - 96px) / 4);
    }

    &_title {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 20px;
    }

    &_text {
      opacity: 0.8;
      font-size: 12px;
    }
  }

  &__info {
    max-width: 500px;
    margin: auto;
    padding: 30px 0;
    text-align: center;
    opacity: 0.8;
    font-size: 12px;
  }
}
</style>
