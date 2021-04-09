<template>
  <div class="nav-list">
    <HeaderNavListItem v-for="nav in navList" :key="nav.id" :navItem="nav" />
  </div>
</template>

<script>
import HeaderNavListItem from '~/components/HeaderNavListItem'

export default {
  component: {
    HeaderNavListItem,
  },
  props: {
    navList: {
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
.nav-list {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'PingFang TC', sans-serif;
  &__item {
    padding: 0;
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
