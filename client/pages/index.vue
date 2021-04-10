<template>
  <div class="home-page page">
    <Slideshow :slideShowList="slideShowList" />
    <Portfolio :portfolioList="getEditorChoicePortfolios" />
    <Recommend />
    <Service />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Slideshow from '~/components/Slideshow'
import Portfolio from '~/components/Portfolio'
import Recommend from '~/components/Recommend'
import Service from '~/components/Service'

export default {
  components: {
    Slideshow,
    Portfolio,
    Recommend,
    Service,
  },
  data() {
    return {
      slideShowList: [
        {
          id: 0,
          name: '',
          urlOriginal: require('@/static/images/slideshow/001.jpg'),
        },
        {
          id: 1,
          name: '',
          urlOriginal: require('@/static/images/slideshow/002.jpg'),
        },
        {
          id: 2,
          name: '',
          urlOriginal: require('@/static/images/slideshow/003.jpg'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters('portfolios', [
      'getEditorChoicePortfolios',
      // Here you can import other getters from the products.js
    ]),
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  background: white;
}
</style>
