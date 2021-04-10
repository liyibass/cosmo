<template>
  <div class="homepage">
    <Slideshow />
    <HomePortfolio />
    <Recommend />
    <Service />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow'
import HomePortfolio from '~/components/HomePortfolio'
import Recommend from '~/components/Recommend'
import Service from '~/components/Service'

export default {
  components: {
    Slideshow,
    HomePortfolio,
    Recommend,
    Service,
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  font-size: 1rem;
}
</style>
