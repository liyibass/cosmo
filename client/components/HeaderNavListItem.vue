<template>
  <div
    class="nav-item"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <transition name="fast-fade" mode="out-in">
      <span v-if="isHovered" key="1" class="nav-item__name">
        {{ navItem.engName }}
      </span>
      <nobr v-else key="2" class="nav-item__name">{{ navItem.name }}</nobr>
    </transition>

    <transition name="slide-fade" mode="in-out">
      <div v-if="navItem.list.length > 0 && isHovered" class="nav-item__list">
        <div
          v-for="navChild in navItem.list"
          :key="navChild.id"
          class="nav-item__list_item"
        >
          {{ navChild.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    navItem: {
      type: Object,
      isRequire: true,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  position: relative;
  width: calc(100% / 8);
  padding: 10px 33px;
  background: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: $color-grey;
  }

  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    &_item {
      text-align: center;
      padding: 10px 0;
      opacity: 0.8;
      font-size: 12px;
      &:hover {
        background: $color-grey;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
