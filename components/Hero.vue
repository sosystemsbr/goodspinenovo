<template>
  <div class="hero pt-9 pb-12 relative text-center sm:text-left bg-cover lg:bg-auto bg-no-repeat bg-right-top mx-auto">
    <div class="container">
      <div>
        <img class="mx-auto sm:mx-0" src="../assets/images/logo.png" alt="GoodSpine Anatomic Support Logo">
      </div>
      <div class="mt-5 sm:mt-8 mb-7 flex items-center justify-center sm:justify-start flex-wrap">
        <p class="inter-700 text-gray-500 text-xl">GS11</p>
        <div class="mx-2 sm:mx-5 flex items-center">
          <img class="mx-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)">
          <img class="mx-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)">
          <img class="mx-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)">
          <img class="mx-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)">
          <img class="mx-1" src="../assets/images/icons/star-no-fill.svg" alt="Estrela preenchida (Avaliação)">
        </div>
        <p class="text-sm sm:text-md text-gray-500 inter-400 ">99.98% de satisfação</p>
      </div>
      <h1 class="max-w-lg mx-auto sm:mx-0 text-3xl sm:text-5xl inter-700 sm:leading-tight text-gray-800 px-4 sm:px-0">O Único Travesseiro Anatômico do Mundo com 11 alturas</h1>
      <div class="mt-12 mb-6 xl:mb-12 flex items-center sm:items-start lg:items-center flex-col lg:flex-row">
        <div class="flex flex-col sm:flex-row items-center">
          <a href="#opcoes-de-compra" v-smooth-scroll class="bg-blue-600 inter-700 md:hover:bg-blue-700 text-white py-4 px-5 transition duration-100 rounded-md text-xl" id="ga-anchor-button-hero">Eu Quero dormir melhor</a>
          <a href="#melhore-seu-sono" v-smooth-scroll class="inter-700 mt-4 mb-2 sm:my-4 mx-6 text-xl text-gray-800 md:hover:underline">Como isso funciona?</a>
        </div>
        <ShowVideo />
      </div>
      <div class="flex items-center justify-center sm:justify-start flex-wrap">
        <div class="flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos">
          <img class="mr-2" src="../assets/images/icons/icon-frete.svg" alt="Ícone ilustrativo">
          <div>
            <p class="inter-400 text-md leading-tight">Frete SP</p>
            <p class="inter-700 text-md leading-tight">GRÁTIS</p>
          </div>
        </div>
        <div class="flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos">
          <img class="mr-2" src="../assets/images/icons/icon-garantia.svg" alt="Ícone ilustrativo">
          <div>
            <p class="inter-400 text-md leading-tight">GARANTIA</p>
            <p class="inter-700 text-md leading-tight">1 ANO</p>
          </div>
        </div>
        <div class="flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos">
          <img class="mr-2" src="../assets/images/icons/icon-compra.svg" alt="Ícone ilustrativo">
          <div>
            <p class="inter-400 text-md leading-tight">COMPRA</p>
            <p class="inter-700 text-md leading-tight">SEGURA</p>
          </div>
        </div>
        <div class="flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos">
          <img class="mr-2" src="../assets/images/icons/icon-selo.png" alt="Ícone ilustrativo">
          <div>
            <p class="inter-400 text-md leading-tight">SELO</p>
            <p class="inter-700 text-md leading-tight">APROVADO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('../assets/images/hero.png');
  max-width: 1920px;
  @media (min-width: 767px) {
    background-image: url('../assets/images/hero.jpg');
  }
}
.selos {
  @media (max-width: 600px) {
    flex-basis:140px;
  }
}
</style>
