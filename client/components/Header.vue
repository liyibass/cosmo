<template>
  <div class="header">
    <div class="header__wrapper" :class="showNavHandler">
      <div class="header__container">
        <div class="header__upper">
          <a class="header__logo" href="/">LOGO</a>
          <HeaderMetaList :metaList="metaList" />
        </div>
        <HeaderNavList
          :navList="navList"
          :navIsOpen="navIsOpen"
          :toggleNav="toggleNav"
        />

        <div class="header__icon" @click="toggleNav">
          <img :src="require('@/static/images/navLogo.svg')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMetaList from '~/components/HeaderMetaList'
import HeaderNavList from '~/components/HeaderNavList'
import { setScrollDirection } from '~/utils/getScrollDirection'

export default {
  component: {
    HeaderMetaList,
    HeaderNavList,
  },
  data() {
    return {
      navIsOpen: false,
      direction: 'up',
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
          link: '',
          list: [
            {
              id: 0,
              name: '關於',
              engName: '',
              link: '/about/#info',
            },
            {
              id: 1,
              name: '攝影師井然',
              engName: '',
              link: '/about/#photographer',
            },
            {
              id: 2,
              name: '使用器材',
              engName: '',
              link: '/about/#gear',
            },
          ],
        },
        {
          id: 2,
          name: '作品',
          engName: 'Portfolio',
          link: '/portfolio',
          list: [],
        },
        {
          id: 3,
          name: '攝影服務',
          engName: 'Service',
          link: '',
          list: [
            {
              id: 0,
              name: '婚禮攝影',
              engName: 'WEDDING',
              link: '',
            },
            {
              id: 1,
              name: '自助婚紗',
              engName: 'PREWEDDING',
              link: '',
            },
            {
              id: 2,
              name: '兒童親子寫真',
              engName: 'CHILDREN',
              link: '',
            },
            {
              id: 3,
              name: '孕婦寫真',
              engName: 'PREGNANCY',
              link: '',
            },
            {
              id: 4,
              name: '活動寫真',
              engName: 'ACITIVY',
              link: '',
            },
            {
              id: 5,
              name: '寵物寫真',
              engName: 'PET PHOTO',
              link: '',
            },
          ],
        },
        {
          id: 4,
          name: '動態攝影',
          engName: 'Action',
          link: '',
          list: [],
        },
        {
          id: 5,
          name: '其他社群',
          engName: 'Social',
          link: '',
          list: [
            {
              id: 0,
              name: 'FACEBOOK',
              engName: 'FACEBOOK',
              link: '',
            },
            {
              id: 1,
              name: 'INSTEGRAM',
              engName: 'INSTEGRAM',
              link: '',
            },
            {
              id: 2,
              name: 'PODCAST',
              engName: 'PODCAST',
              link: '',
            },
            {
              id: 3,
              name: 'YOUTUBE',
              engName: 'YOUTUBE',
              link: '',
            },
          ],
        },
        {
          id: 6,
          name: '部落格',
          engName: 'Blog',
          link: '',
          list: [],
        },
        {
          id: 7,
          name: '檔期預約',
          engName: 'Booking',
          link: '',
          list: [],
        },
      ],
      metaList: [
        {
          id: 0,
          name: '婚紗婚禮攝影師',
          link: '',
        },
        {
          id: 1,
          name: '美式婚禮推薦',
          link: '',
        },
        {
          id: 2,
          name: '戶外婚禮推薦',
          link: '',
        },
        {
          id: 3,
          name: '婚紗婚禮推薦',
          link: '',
        },
        {
          id: 4,
          name: '海外婚紗',
          link: '',
        },
        {
          id: 5,
          name: '2021婚禮紀錄推薦',
          link: '',
        },
      ],
    }
  },
  computed: {
    showNavHandler() {
      if (this.direction === 'down') {
        // return { top: '-200px' }
        return 'hide-all'
      } else if (this.direction === 'up') {
        // return { top: '-65px' }
        return 'show-half'
      } else {
        return 'show-all'

        // return { top: '0px' }
      }
    },
  },
  mounted() {
    setScrollDirection(this)
    this.isWindowIsTop()
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen
    },
    isWindowIsTop() {},
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 900;
  width: 100vw;
  height: 90px;

  // tablet range
  @include media-breakpoint-up(md) {
    height: 134px;
  }

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 30px;
    background: white;
    transition: all 0.5s ease-in-out;

    &.show-all {
      top: 0;
    }
    &.hide-all {
      top: -200px;
    }
    &.show-half {
      top: -0;
      // tablet range
      @include media-breakpoint-up(md) {
        top: -65px;
      }
    }
  }

  &__container {
    position: relative;
  }

  &__upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
