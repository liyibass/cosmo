<template>
  <div class="recommend-card">
    <span class="recommend-card__title">{{ recommend.name }}</span>
    <span class="recommend-card__image">{{ recommend.urlOriginal }}</span>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Object,
      isRequired: true,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.recommend-card {
  width: 600px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &__title {
    font-size: 20px;
    font-weight: bold;
  }

  &__image {
    width: 60%;
    height: 60%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
  }
}
</style>
