<template>
  <div class="portfolio main-section">
    <div class="portfolio__title main-title">{{ currentPortfolio.name }}</div>

    <Slideshow :slideShowList="currentPortfolio.cover" />

    <div
      class="portfolio__html_content"
      v-html="currentPortfolio.content"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Slideshow from '~/components/Slideshow'

export default {
  components: {
    Slideshow,
  },
  data() {
    return {
      currentId: parseInt(this.$route.params.id),
      currentPortfolio: {
        id: 0,
        name: '婚紗攝影1',
        subTitle: '婚攝：井然',
        isEditorChoice: true,
        cover: [
          {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio01.jpg'),
          },
        ],
        content: 'Liyi',
      },
    }
  },
  computed: {
    ...mapGetters('portfolios', ['getPortfolioById']),
  },
  mounted() {
    this.currentPortfolio = this.getPortfolioById(this.currentId)
    console.log(this.currentPortfolio)
    // if (!hasCategory) {
    //       this.$nuxt.error({ statusCode: 404 })
    //     }
  },
}
</script>

<style lang="scss" scoped>
.portfolio {
  background: white;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;

  &__html_content {
    max-width: 800px;
    min-height: 200px;
  }
}
</style>
