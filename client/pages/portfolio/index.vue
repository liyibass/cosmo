<template>
  <div class="portfolio-page main-section">
    <Portfolio :portfolioList="portfolioList" />
  </div>
</template>

<script>
import Portfolio from '~/components/Portfolio'

export default {
  components: {
    Portfolio,
  },
  data() {
    return {
      portfolioList: [
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
        {
          id: 6,
          name: '婚紗攝影1',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio01.jpg'),
          },
        },
        {
          id: 7,
          name: '婚紗攝影2',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio02.jpg'),
          },
          content: 'yoyo',
        },
        {
          id: 8,
          name: '婚紗攝影3',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio03.jpg'),
          },
          content: 'yoyo',
        },
        {
          id: 9,
          name: '婚紗攝影4',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio04.jpg'),
          },
          content: 'yoyo',
        },
        {
          id: 10,
          name: '婚紗攝影5',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio05.jpg'),
          },
          content: 'yoyo',
        },
        {
          id: 11,
          name: '婚紗攝影6',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio06.jpg'),
          },
          content: 'yoyo',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-page {
  background: white;
}
</style>
