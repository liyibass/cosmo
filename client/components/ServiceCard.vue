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
  width: 100%;
  height: 300px;
  background: $color-grey;
  padding: 40px 23px 23px 23px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  transform: translateY(50px) scale(0.7);
  opacity: 0.3;
  transition: all 0.2s ease-in;
  &.reveal {
    animation-name: rotateFade;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  // tablet range
  @include media-breakpoint-up(md) {
    width: calc((100% - 2 * 20px) / 2);
  }

  // desktop range
  @include media-breakpoint-up(xl) {
    width: calc((100% - 2 * 50px) / 3);
  }

  &:last-child {
    // tablet range
    @include media-breakpoint-up(md) {
      margin: auto;
    }

    // desktop range
    @include media-breakpoint-up(xl) {
      margin: initial;
    }
  }

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

@keyframes rotateFade {
  0% {
    transform: translateY(50px) scale(0.7);
    opacity: 0.3;
  }

  30% {
    transform: translateY(-20px) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(10px);
  }
}
</style>
