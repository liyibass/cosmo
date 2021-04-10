<template>
  <div class="portfolio-page main-section">
    <Portfolio :portfolioList="getAllPortfolios" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Portfolio from '~/components/Portfolio'

export default {
  components: {
    Portfolio,
  },
  computed: {
    ...mapGetters('portfolios', [
      'getAllPortfolios',
      'getEditorChoicePortfolios',
      // Here you can import other getters from the portfolios/getters.js
      // or just read $store.getters[`portfolios/getAllPortfolios`]
      // to get state from the portfolios/state.js
    ]),
  },
}
</script>

<style lang="scss" scoped>
.portfolio-page {
  background: white;
}
</style>
