<template>
  <div class="test-nights">
    <button v-if="closeButton" class="closeButton inter-700" @click="closeEvent">
      <span>x</span>
    </button>
    <div class="container">
      <div class="wrapper">
        <h2 class="inter-700 mb-7 text-3xl md:text-5xl text-center">21 noites de Teste</h2>
        <p class="inter-400 mb-10 md:mb-16 text-purple-200 text-xl md:text-2xl mx-auto text-center" style="max-width: 750px;">A GoodSpine garante à qualidade do seu sono! Se você não se adaptar, pode nos devolver o travesseiro que devolvemos o valor integral menos 10% de taxa administrativa.</p>

        <div class="text-center">
          <span @click="closeEvent">
            <a href="#opcoes-de-compra" v-smooth-scroll="{ duration: 1000 }" class="link inter-700" id="ga-anchor-button-section">Eu Quero dormir melhor</a>
          </span>
        </div>
        <div class="obs-text">
          <p class="flex items-center justify-center inter-400 mt-4 md:mt-7 text-purple-300 md:text-lg">
            <img class="mr-3.5" src="../assets/images/icons/icon-info.svg" alt="Ícone ilustrativo">
            Frete de devolução por conta do cliente
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeButton: Boolean
  },
  methods: {
    closeEvent() {
      this.$emit('close')
    }
  }
}
</script>


<style lang="scss" scoped>
.test-nights {
  background: linear-gradient(180deg, #6B21A8 0%, #581C87 100%);
  @apply text-white py-14 md:py-20 relative;

  .wrapper {
    @apply mx-auto relative pt-24 md:pt-20;
    max-width: 1260px;
    background: url('../assets/images/icons/icon-moon.svg') no-repeat top center;
    background-size: 70px;

    @media (min-width: 768px) {
      background-position: left 30px top;
    }
    @media (min-width: 1024px) {
      background-size: 114px;
    }
    @media (min-width: 1280px) {
      background-position: left 100px top;
    }
  }

  .link {
    @apply bg-white inline-block py-4 px-5 sm:px-6 rounded-md text-lg sm:text-xl;
    color: #6B21A8;
  }

  .closeButton {
    @apply absolute rounded-full cursor-pointer border-4 border-white border-solid inline-block text-center;
    top: 20px; right: 20px;
    width: 35px; height: 35px;
    span {
      font-size: 22px;
      line-height: 0;
    }

    @media (min-width: 768px) {
      top: 30px; right: 30px;
      width: 45px; height: 45px;
      span {
        font-size: 26px;
      }
    }
  }

  .obs-text {
    @media (max-width: 767px) {
      @apply mx-auto;
      max-width: 200px;
    }
  }
}
</style>
