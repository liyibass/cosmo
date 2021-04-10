<template>
  <div class="home-page page">
    <Slideshow />
    <ChoicePortfolio />
    <Recommend />
    <Service />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow'
import ChoicePortfolio from '~/components/ChoicePortfolio'
import Recommend from '~/components/Recommend'
import Service from '~/components/Service'

export default {
  components: {
    Slideshow,
    ChoicePortfolio,
    Recommend,
    Service,
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  background: white;
}
</style>
