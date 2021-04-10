<template>
  <div class="service-card">
    <div class="service-card__title">{{ service.name }}</div>
    <div class="service-card__content">{{ service.content }}</div>
    <div class="service-card__icon">
      <img :src="service.icon" :alt="service.name" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      isRequired: true,
      default: () => {
        return {
          id: 0,
          name: '婚禮攝影服務',
          content: '文定攝影/儀式攝影/婚禮攝影/婚宴攝影',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.service-card {
  position: relative;
  width: calc((100% - 2 * 50px) / 3);
  height: 300px;
  background: $color-grey;
  padding: 40px 23px 23px 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  transform: translateY(10px);
  transition: all 0.2s ease-in;

  &__icon {
    width: 40px;
    height: 40px;
    top: 0;
    left: 50%;
    padding: 10px;
    transform: translate(-50%, -50%);
    position: absolute;
    background: $color-main-dark;
    border-radius: 50%;
    transition: all 0.2s ease-in;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: invert(100%);
    }
  }

  &:hover {
    transform: translateY(0);
    background: rgb(220, 220, 220);

    .service-card__icon {
      width: 45px;
      height: 45px;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 16px;
  }
  &__content {
    font-size: 14px;
  }
}
</style>
