<template>
  <div class="homepage">
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
.homepage {
  font-size: 1rem;
}
</style>
