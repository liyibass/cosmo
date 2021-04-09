<template>
  <div class="homepage">
    <Slideshow />
    <HomePortfolio />
    <Recommend />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow'
import HomePortfolio from '~/components/HomePortfolio'
import Recommend from '~/components/Recommend'

export default {
  components: {
    Slideshow,
    HomePortfolio,
    Recommend,
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  font-size: 1rem;
}
</style>
