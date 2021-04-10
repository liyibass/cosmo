<template>
  <div class="portfolio-card" @click="goToPortfolioPage">
    <div class="portfolio-card__cover">
      <img :src="portfolio.cover[0].urlOriginal" :alt="portfolio.name" />
      <div class="portfolio-card__cover_mask">
        {{ portfolio.name }}
      </div>
    </div>
    <div class="portfolio-card__name">{{ portfolio.name }}</div>
    <div class="portfolio-card__sub-title">{{ portfolio.subTitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      isRequired: true,
      default: () => {
        return {
          id: 0,
          name: '婚紗攝影1',
          subTitle: '婚攝：井然',
          cover: {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio01.jpg'),
          },
        }
      },
    },
  },
  methods: {
    goToPortfolioPage() {
      this.$router.push(`/portfolio/${this.portfolio.id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-card {
  flex: 1;
  min-width: calc((100% - 4 * 10px) / 2);
  margin: 10px;
  display: flex;
  flex-direction: column;

  // small range
  @include media-breakpoint-up(sm) {
    min-width: calc((100% - 4 * 25px) / 2);
    margin: 25px;
  }

  // tablet range
  @include media-breakpoint-up(md) {
    min-width: calc((100% - 6 * 25px) / 3);
  }

  &__cover {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 0.4s ease-in-out;
    }

    &_mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      opacity: 0;
      transition: all 0.4s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
      .portfolio-card__cover_mask {
        opacity: 1;
      }
    }
  }

  &__name {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  &__sub-title {
    font-size: 12px;
  }
}
</style>
