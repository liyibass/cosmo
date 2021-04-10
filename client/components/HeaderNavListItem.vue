<template>
  <div
    class="nav-item"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="nav-item__container" @click="goToPage(navItem)">
      <transition name="fast-fade" mode="out-in">
        <span v-if="isHovered" key="1" class="nav-item__name">
          {{ navItem.engName }}
        </span>
        <nobr v-else key="2" class="nav-item__name">{{ navItem.name }}</nobr>
      </transition>
    </div>

    <transition name="slide-fade" mode="in-out">
      <div v-if="navItem.list.length > 0 && isHovered" class="nav-item__list">
        <div
          v-for="navChild in navItem.list"
          :key="navChild.id"
          class="nav-item__list_item"
          @click="goToPage(navChild)"
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
  methods: {
    goToPage(navItem) {
      if (navItem.link.length > 0) this.$router.push(navItem.link)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  z-index: 0;
  position: relative;
  min-width: 50vw;

  // tablet range
  @include media-breakpoint-up(md) {
    width: calc(100% / 8);
    min-width: auto;
  }

  &__container {
    width: 100%;
    position: relative;
    padding: 15px 33px;
    background: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    // tablet range
    @include media-breakpoint-up(md) {
      padding: 10px 10px;
    }

    &:hover {
      background: $color-grey;
    }
  }

  &__list {
    position: absolute;
    top: 0;
    left: -100%;
    min-width: 50vw;
    background: white;

    // tablet range
    @include media-breakpoint-up(md) {
      top: 100%;
      left: 0;
      min-width: auto;
      width: 100%;
    }

    &_item {
      z-index: 1;
      text-align: center;
      padding: 10px 0;
      opacity: 0.8;
      font-size: 12px;
      cursor: pointer;
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
