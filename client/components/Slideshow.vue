<template>
  <div class="slideshow">
    <carousel
      :perPage="1"
      centerMode
      :loop="true"
      :paginationEnabled="showPagination"
      paginationPosition="bottom-overlay"
      :paginationSize="10"
      paginationColor="#dddedf"
      paginationActiveColor="#737374"
    >
      <slide v-for="image in slideShowList" :key="image.id">
        {{ image.name }}
        <div class="slideshow__image">
          <img :src="image.urlOriginal" alt="" />
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
  props: {
    slideShowList: {
      type: Array,
      isRequired: true,
      default: () => {
        return [
          {
            id: 0,
            urlOriginal: require('@/static/images/choicePortfolio/portfolio01.jpg'),
          },
        ]
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    showPagination() {
      return this.slideShowList.length > 1
    },
  },
}
</script>

<style lang="scss" scoped>
.slideshow {
  width: 100%;
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
