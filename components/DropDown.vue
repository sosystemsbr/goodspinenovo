<template>
  <div class="mb-4">
    <button @click="show = !show" class="bg-gray-100 px-4 py-3 flex items-center rounded-lg w-full text-left">
      <img class="icon" :class="{'rotate': show}" src="../assets/images/icons/icon-question.svg" alt="Ícone ilustrativo">
      <slot name="question" class="text-lg text-gray-800"></slot>
    </button>
    <transition name="fade">
      <p v-if="show" class="px-4 py-3 text-md text-gray-800">
        <slot name="answer"></slot>
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  @apply mr-3;
  &.rotate {
    transform: rotate(90deg);
    transition: 200ms;
  }
}

.fade-enter-active {
  transition: opacity .25s;
}
.fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
