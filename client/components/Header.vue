<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__logo">LOGO</div>
      <HeaderMetaList :metaList="metaList" />
      <HeaderNavList :navList="navList" :navIsOpen="navIsOpen" />

      <div class="header__icon" @click="toggleNav">
        <img :src="require('@/static/images/navLogo.svg')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMetaList from '~/components/HeaderMetaList'
import HeaderNavList from '~/components/HeaderNavList'

export default {
  component: {
    HeaderMetaList,
    HeaderNavList,
  },
  data() {
    return {
      navIsOpen: false,
      navList: [
        {
          id: 0,
          name: '首頁',
          engName: 'Home',
          link: '/',
          list: [],
        },
        {
          id: 1,
          name: '關於井然',
          engName: 'About',
          link: '/',
          list: [
            {
              id: 0,
              name: '攝影師井然',
              engName: '',
            },
            {
              id: 1,
              name: '使用器材',
              engName: '',
            },
          ],
        },
        {
          id: 2,
          name: '作品',
          engName: 'Portfolio',
          link: '/',
          list: [],
        },
        {
          id: 3,
          name: '攝影服務',
          engName: 'Service',
          link: '/',
          list: [
            {
              id: 0,
              name: '婚禮攝影',
              engName: 'WEDDING',
            },
            {
              id: 1,
              name: '自助婚紗',
              engName: 'PREWEDDING',
            },
            {
              id: 2,
              name: '兒童親子寫真',
              engName: 'CHILDREN',
            },
            {
              id: 3,
              name: '孕婦寫真',
              engName: 'PREGNANCY',
            },
            {
              id: 4,
              name: '活動寫真',
              engName: 'ACITIVY',
            },
            {
              id: 5,
              name: '寵物寫真',
              engName: 'PET PHOTO',
            },
          ],
        },
        {
          id: 4,
          name: '動態攝影',
          engName: 'Home',
          link: '/',
          list: [],
        },
        {
          id: 5,
          name: '其他社群',
          engName: 'Social',
          link: '/',
          list: [
            {
              id: 0,
              name: 'FACEBOOK',
              engName: 'FACEBOOK',
            },
            {
              id: 1,
              name: 'INSTEGRAM',
              engName: 'INSTEGRAM',
            },
            {
              id: 2,
              name: 'PODCAST',
              engName: 'PODCAST',
            },
            {
              id: 3,
              name: 'YOUTUBE',
              engName: 'YOUTUBE',
            },
          ],
        },
        {
          id: 6,
          name: '部落格',
          engName: 'Blog',
          link: '/',
          list: [],
        },
        {
          id: 7,
          name: '檔期預約',
          engName: 'Booking',
          link: '/',
          list: [],
        },
      ],
      metaList: [
        {
          id: 0,
          name: '婚紗婚禮攝影師',
        },
        {
          id: 1,
          name: '美式婚禮推薦',
        },
        {
          id: 2,
          name: '戶外婚禮推薦',
        },
        {
          id: 3,
          name: '婚紗婚禮推薦',
        },
        {
          id: 4,
          name: '海外婚紗',
        },
        {
          id: 5,
          name: '2021婚禮紀錄推薦',
        },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 900;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 30px;
  background: white;

  // tablet range
  @include media-breakpoint-up(md) {
    position: relative;
  }

  &__wrapper {
    position: relative;
  }

  &__logo {
    width: 160px;
    height: 70px;
    // border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    cursor: pointer;

    // tablet range
    @include media-breakpoint-up(md) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
