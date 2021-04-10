<template>
  <div class="home-page page">
    <Slideshow />
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
      choicePortfolioList: [
        {
          id: 0,
          name: '婚紗攝影1',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio01.jpg'),
          },
        },
        {
          id: 1,
          name: '婚紗攝影2',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio02.jpg'),
          },
        },
        {
          id: 2,
          name: '婚紗攝影3',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio03.jpg'),
          },
        },
        {
          id: 3,
          name: '婚紗攝影4',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio04.jpg'),
          },
        },
        {
          id: 4,
          name: '婚紗攝影5',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio05.jpg'),
          },
        },
        {
          id: 5,
          name: '婚紗攝影6',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio06.jpg'),
          },
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
