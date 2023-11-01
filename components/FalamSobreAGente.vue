<template>
  <div class="text-white" style="background: linear-gradient(97.82deg, #60A5FA 0.97%, #2563EB 98.87%);">
    <div class="container pt-20">
      <div class="flex items-center justify-center">
        <img class="mx-1" src="../assets/images/icons/icon-star-white.svg" alt="Ícone de estrela preenchida">
        <img class="mx-1" src="../assets/images/icons/icon-star-white.svg" alt="Ícone de estrela preenchida">
        <img class="mx-1" src="../assets/images/icons/icon-star-white.svg" alt="Ícone de estrela preenchida">
        <img class="mx-1" src="../assets/images/icons/icon-star-white.svg" alt="Ícone de estrela preenchida">
        <img class="mx-1" src="../assets/images/icons/icon-star-white.svg" alt="Ícone de estrela preenchida">
      </div>
      <h2 class="mt-8 mb-4 text-3xl md:text-6xl text-center lg:px-16">Veja o que estão falando sobre a gente</h2>
      <p class="text-blue-100 mx-auto text-xl md:text-2xl text-center" style="max-width: 730px;">O travesseiro anatômico da GoodSpine é o mais indicado por especialistas da coluna vertebral por inúmeras razões.</p>
    </div>

    <Carousel class="mt-20 mb-14" />

    <div class="container pb-12">
      <div class="flex items-center justify-center">
        <p class="text-2xl mt-4 text-center">Mais de 1000 clientes satisfeitos +</p>
      </div>

      <div class="flex mt-10 justify-center flex-col lg:flex-row lg:transform lg:translate-y-40 lg:-mt-32">
        <div class="card">
          <div class="flex mb-2">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
          </div>
          <p class="text-xl mb-3">Paciente com dor cervical</p>
          <p class="card-description">Há 1 ano, com diagnóstico de protusão discal, contratura muscular e dor irradiada para as escápulas. Começou o tratamento com a Quiropraxia, teve uma melhora de 80% em apenas 5 sessões, porém os 20% de incômodo persistiam. Perguntei sobre o travesseiro e descobri que a paciente não apenas dormia de bruços como usava um travesseiro muito alto para o biotipo dela. Ela pegou um GS11, montou na altura adequada, e logo no terceiro dia relatou remissão total da dor.</p>
          <!-- <p class="card-data">22/12/2020</p> -->
        </div>

        <div class="card lg:mx-4">
          <div class="flex mb-2">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
          </div>
          <p class="text-xl mb-3">Paciente de 45 anos</p>
          <p class="card-description">1,95, 130 Kilos com dores no pescoço e costas principalmente a noite. Começou tratamento, com melhora pífia. Investigando melhor descobri que ele, não gostava muito de usar travesseiro e usava apenas um bem pequeno. Mostrei pra ele que o ombro dele era muito grande pra usar um travesseiro baixo demais, e que aquilo sem sombra de dúvidas podia ser uma das razões da dor cervical dele. A esposa comprou o travesseiro GS11, montou na altura certa e em poucas semanas paciente relatou melhora de 80% das dores. Não acordava mais a noite devido às mesmas.</p>
          <!-- <p class="card-data">15/01/2021</p> -->
        </div>

        <div class="card">
          <div class="flex mb-2">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
            <img class="mr-1" src="../assets/images/icons/star-fill.svg" alt="Estrela preenchida (Avaliação)" style="max-width: 16px;">
          </div>
          <p class="text-xl mb-3">Paciente mulher</p>
          <p class="card-description">Com dores nas costas, dor de cabeça e dor no pescoço começamos o tratamento, porém estava faltando mais estímulos adequados foi quando ela decidiu trocar o colchão, o travesseiro, e ainda comprou um rolinho cervical. Após algumas sessões, e a somatória de fatores positivos pra coluna dela, ela começou a se ver livre de uma dor de cabeça que a acompanhava por anos. hoje está quase zerada, me fala que está 90% melhor.</p>
          <!-- <p class="card-data">28/04/2021</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply p-4 pb-12 xl:p-6 xl:pb-16 shadow-lg rounded-xl bg-white text-black mb-6 lg:mb-0 relative;
  flex-basis: 33%;

  &-description {
    @apply mb-2 mt-2 text-sm md:text-base;
  }
  &-data {
    @apply text-gray-400 text-xs md:text-base absolute;
    bottom: 25px;
  }
}
</style>
