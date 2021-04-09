<template>
  <div class="recommend">
    <RecommendCard
      v-for="recommend in recommendList"
      :key="recommend.id"
      :recommend="recommend"
    />
  </div>
</template>

<script>
import RecommendCard from '~/components/RecommendCard'
export default {
  components: {
    RecommendCard,
  },
  data() {
    return {
      recommendList: [
        { id: 0, name: '新人A', urlOriginal: '超屌' },
        { id: 1, name: '新人B', urlOriginal: '屌爆' },
        { id: 2, name: '新人C', urlOriginal: '屌炸天' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.recommend {
  background: url('~static/images/recommend.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 300vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
