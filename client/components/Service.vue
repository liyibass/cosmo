<template>
  <div class="service">
    <div class="service__title">服務項目</div>
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
}
</script>

<style lang="scss" scoped>
.service {
  background: white;
  padding: 30px 0 80px;
  &__title {
    text-align: center;
    font-size: 25px;
    margin: 0 auto 35px;
  }
  &__container {
    max-width: 850px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
