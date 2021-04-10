<template>
  <div class="nav-list" :class="{ show: navIsOpen }">
    <HeaderNavListItem
      v-for="nav in navList"
      :key="nav.id"
      :navItem="nav"
      :toggleNav="toggleNav"
    />
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
    navIsOpen: {
      type: Boolean,
      isRequired: true,
      default: () => {
        return false
      },
    },
    toggleNav: {
      type: Function,
      isRequired: true,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-list {
  position: fixed;
  top: 90px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'PingFang TC', sans-serif;
  background: white;
  transform: translateX(200%);
  transition: all 0.2s ease-in;
  &.show {
    transform: translateX(0);
  }

  // tablet range
  @include media-breakpoint-up(md) {
    position: relative;
    top: auto;
    right: 0;
    width: 100%;
    flex-direction: row;
    transform: translateX(0);
  }

  // desktop range
  @include media-breakpoint-up(xl) {
    font-family: 'PingFang TC', sans-serif;
  }

  &__item {
    padding: 0;
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
