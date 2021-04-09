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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'PingFang TC', sans-serif;
  margin-bottom: 10px;
  &__item {
    padding: 0 9px;
    border-right: 2px solid $color-main-dark;
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
