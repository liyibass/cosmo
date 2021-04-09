<template>
  <div class="homepage">
    <Slideshow />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow'

export default {
  components: {
    Slideshow,
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  font-size: 1rem;
}
</style>
