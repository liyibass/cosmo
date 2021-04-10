<template>
  <div class="service main-section">
    <div class="service__title main-title">服務項目</div>
    <div class="service__container">
      <ServiceCard
        v-for="service in serviceList"
        :key="service.id"
        :service="service"
      />
    </div>
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard'

export default {
  component: {
    ServiceCard,
  },
  data() {
    return {
      serviceList: [
        {
          id: 0,
          name: '婚禮攝影服務',
          content: '文定攝影/儀式攝影/婚禮攝影/婚宴攝影',
          icon: require(`~/static/images/service/camera.svg`),
        },
        {
          id: 1,
          name: '海外婚禮攝影服務',
          content: '文定攝影/儀式攝影/婚禮攝影/婚宴攝影',
          icon: require(`~/static/images/service/offline.svg`),
        },
        {
          id: 2,
          name: '其他攝影服務',
          content: '活動攝影/美食攝影/建築攝影/商品攝影',
          icon: require(`~/static/images/service/gallery.svg`),
        },
      ],
    }
  },
  mounted() {
    const serviceListDOM = document.querySelectorAll('.service-card')
    const sceneArray = []

    for (let i = 0; i < serviceListDOM.length; i++) {
      const serviceDOM = serviceListDOM[i]

      const serviceScene = this.$scrollmagic
        .scene({
          triggerElement: serviceDOM,
          triggerHook: 0.9,
          offset: 50,
          duration: '150%',
        })
        .setClassToggle(serviceDOM, 'reveal') // add class to recommendDOM
        // .addIndicators() // add indicators (requires plugin)
        .on('enter', () => {})

        .on('leave', () => {})

        .on('progress', (e) => {})
      // .addIndicators({ name: 'workflowScene' })

      sceneArray.push(serviceScene)
    }

    this.$scrollmagic.addScene(sceneArray)
  },
}
</script>

<style lang="scss" scoped>
.service {
  &__container {
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    // tablet range
    @include media-breakpoint-up(md) {
      max-width: 650px;
    }

    // desktop range
    @include media-breakpoint-up(xl) {
      max-width: 1000px;
    }
  }
}
</style>
