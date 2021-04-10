<template>
  <div class="meta-list">
    <div v-for="meta in metaList" :key="meta.id" class="meta-list__item">
      {{ meta.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    metaList: {
      type: Array,
      isRequire: true,
      default: () => {
        return [
          {
            id: 0,
            name: '婚紗婚禮攝影師',
          },
          {
            id: 1,
            name: '美式婚禮推薦',
          },
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.meta-list {
  width: 100%;
  height: 30px;
  background: white;
  padding: 0 49px;
  display: none;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  // desktop range
  @include media-breakpoint-up(xl) {
    display: flex;
  }
  &__item {
    padding: 0 9px;
    font-family: 'PingFang TC', sans-serif;
    color: $color-main-dark-gray;
    font-size: 14px;
    border-right: 2px solid $color-main-dark-gray;
    opacity: 0.8;
  }
}
</style>
