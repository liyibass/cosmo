<template>
  <div class="recommend">
    <RecommendCard
      v-for="recommend in recommendList"
      :key="recommend.id"
      :recommend="recommend"
    />

    <div class="recommend__background_bottom" />
    <div class="recommend__background_top" />
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
  mounted() {
    const recommendListDOM = document.querySelectorAll('.recommend-card')
    const sceneArray = []

    for (let i = 0; i < recommendListDOM.length; i++) {
      const recommendDOM = recommendListDOM[i]

      const recommendScene = this.$scrollmagic
        .scene({
          triggerElement: recommendDOM,
          triggerHook: 0.9,
          offset: 50,
          duration: '80%',
        })
        .setClassToggle(recommendDOM, 'reveal') // add class to recommendDOM
        // .addIndicators() // add indicators (requires plugin)
        .on('enter', () => {})

        .on('leave', () => {})

        .on('progress', (e) => {})
      // .addIndicators({ name: 'workflowScene' })

      sceneArray.push(recommendScene)
    }

    this.$scrollmagic.addScene(sceneArray)
  },
}
</script>

<style lang="scss" scoped>
.recommend {
  position: relative;
  width: 100%;
  height: 300vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &::before {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('~static/images/recommend.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  &__background_bottom,
  &__background_top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('~static/images/recommend.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  &__background_bottom {
    z-index: 0;
    opacity: 0.2;
  }
  &__background_top {
    z-index: 1;
    transform: scale(0.8);
  }
}
</style>
