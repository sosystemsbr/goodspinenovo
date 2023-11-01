<template>
  <div>
    <button @click="show" class="xl:absolute my-2 inline-flex items-center play cursor-pointer opacity-80 hover:opacity-100 rounded-full px-4 py-2 lg:px-5 lg:py-3 transition duration-200" id="ga-video-button-hero">
      <img class="mr-2 logo-play" src="../assets/images/icons/icon-play.svg" alt="Ícone ilustrativo">
      <div class="text-left">
        <p class="inter-700 text-xs lg:text-lg leading-tight text-white">Veja o vídeo</p>
        <p class="inter-700 text-xs leading-tight text-gray-400 lg:uppercase">1 min</p>
      </div>
    </button>
    <modal name="video" :width="video.width" :height="video.height">
      <iframe :width="video.width" :height="video.height" src="https://www.youtube.com/embed/peXxD2zLK-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </modal>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      video: {
        width: 560,
        height: 315
      }
    }
  },
  methods: {
    show() {
      this.$modal.show('video')
    }
  },
  beforeMount() {
    const screenWidth = screen.width
    if(screenWidth < 700) {
      this.video.width = 420
      this.video.height = 236
    }
    if(screenWidth < 475) {
      this.video.width = 320
      this.video.height = 180
    }
  }
}
</script>

<style lang="scss" scoped>
.play {
  right: 200px;
  bottom: 50px;
  background-color: #111827;
  @media (max-width: 1200px) {
    right: 100px;
  }
}
.logo-play {
  @media (max-width: 1023px) {
    max-width: 32px;
  }
}
</style>
