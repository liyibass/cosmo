<template>
  <div class="choice-portfolio main-section">
    <div class="choice-portfolio__title main-title">作品集</div>

    <div class="choice-portfolio__container">
      <ChoicePortfolioCard
        v-for="choicePortfolio in choicePortfolioList"
        :key="choicePortfolio.id"
        :portfolio="choicePortfolio"
      />
    </div>
  </div>
</template>

<script>
import ChoicePortfolioCard from '~/components/ChoicePortfolioCard'

export default {
  component: {
    ChoicePortfolioCard,
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
}
</script>

<style lang="scss" scoped>
.choice-portfolio {
  width: 100%;
  background: white;

  &__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 500px;
    margin: auto;

    // tablet range
    @include media-breakpoint-up(md) {
      max-width: 1000px;
    }
  }
}
</style>
