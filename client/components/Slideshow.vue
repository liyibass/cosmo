<template>
  <div class="slideshow">
    <carousel
      :perPage="1"
      centerMode
      :loop="true"
      :paginationEnabled="true"
      paginationPosition="bottom-overlay"
      :paginationSize="10"
      paginationColor="#dddedf"
      paginationActiveColor="#737374"
    >
      <slide v-for="image in slideShowList" :key="image.id">
        {{ image.name }}
        <div class="slideshow__image">
          <img :src="image.urlDesktop" alt="" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slideShowList: [
        {
          id: 0,
          name: '',
          urlDesktop: require('@/static/images/slideshow/001.jpg'),
        },
        {
          id: 1,
          name: '',
          urlDesktop: require('@/static/images/slideshow/002.jpg'),
        },
        {
          id: 2,
          name: '',
          urlDesktop: require('@/static/images/slideshow/003.jpg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.slideshow {
  width: 100vw;
  overflow: hidden;
  &__image {
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
