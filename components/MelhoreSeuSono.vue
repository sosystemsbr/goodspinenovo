<template>
  <div class="container pt-20 pb-10 md:pb-28">
    <h2 class="title text-gray-800 text-2xl sm:text-3xl md:text-5xl leading-tight md:leading-snug text-center mb-20 md:mb-28">Você já parou para pensar que o seu travesseiro pode ser o causador desses problemas?</h2>

    <div class="mb-16 md:mb-24">
      <div class="flex items-center mb-6 flex-wrap mx-auto md:mx-0 md:max-w-full">
        <img src="../assets/images/icons/icon-generico.jpg" alt="Ícone ilustrativo">
        <h3 class="mx-4 text-3xl md:text-5xl text-gray-700">Genérico</h3>
        <p class="text-gray-500 text-xl md:text-2xl mt-2 lg:mx-2">Um travesseiro comum não leva em consideração os diferentes biotipos</p>
      </div>
      <div class="flex flex-wrap justify-between lg:justify-center" style="max-width: 920px;">
        <div class="card">
          <img src="../assets/images/icons/icon-head.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Dor de cabeça</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-head.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Dor no pescoço</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-people.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Dores nas costas</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-head.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Torcicolo</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-stress.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Estresse</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-brain.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Falta de foco</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-people.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Cansaço excessivo</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/icon-stress.svg" alt="Ícone ilustrativo">
          <p class="text-red-800 text-xl mt-6">Irritabilidade</p>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center mb-6 flex-wrap mx-auto md:mx-0 md:max-w-full">
        <img src="../assets/images/icons/icon-product.jpg" alt="Ícone ilustrativo">
        <h3 class="mx-4 text-3xl md:text-5xl text-gray-700">
          GS11
          <img class="inline ml-1 -mt-2 sm:hidden" src="../assets/images/icons/icon-approved.svg" alt="Ícone ilustrativo" style="max-width: 28px;">
        </h3>
        <div class="flex items-center">
          <p class="text-gray-500 text-xl lg:text-2xl mt-2 lg:mx-2" style="max-width: 689px;">
            Um travesseiro desenvolvido por especialistas da coluna vertebral que se encaixa perfeitamente em qualquer biotipo
          </p>
          <img class="hidden sm:inline ml-4" src="../assets/images/icons/icon-approved.svg" alt="Ícone ilustrativo">
        </div>
      </div>
      <div class="flex sm:items-start flex-col-reverse lg:flex-row">
        <div class="flex flex-wrap justify-between lg:justify-center md:justify-top" style="max-width: 684px;">
          <div class="card green">
            <img src="../assets/images/icons/icon-head-green.svg" alt="Ícone ilustrativo">
            <p class="text-green-800 text-xl mt-6">Sem dores</p>
          </div>
          <div class="card green">
            <img src="../assets/images/icons/icon-happy.svg" alt="Ícone ilustrativo">
            <p class="text-green-800 text-xl mt-6">Qualidade de vida</p>
          </div>
          <div class="card green">
            <img src="../assets/images/icons/icon-height.svg" alt="Ícone ilustrativo">
            <p class="text-green-800 text-xl mt-6">Regulagem de 11 alturas</p>
          </div>
          <div class="card green">
            <img src="../assets/images/icons/icon-zzz.svg" alt="Ícone ilustrativo">
            <p class="text-green-800 text-xl mt-6">Melhora do sono</p>
          </div>
          <div class="card green">
            <img src="../assets/images/icons/icon-people-green.svg" alt="Ícone ilustrativo">
            <p class="text-green-800 text-xl mt-6">Maior disposição</p>
          </div>
          <div class="card green">
            <img src="../assets/images/icons/icon-search.svg" alt="Ícone ilustrativo">
            <p class="text-green-800 text-xl mt-6">Mais concentração</p>
          </div>
        </div>
        <div class="lg:ml-2 mb-10 lg:md:0">
          <img class="picture" src="../assets/images/GS11.jpg" alt="Quiropraxista realizando uma massagem">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  max-width: 1200px;
}
.card {
  background: linear-gradient(120.38deg, #FEF2F2 3.62%, #FECACA 97.3%);
  width: 100%;
  @apply p-3 rounded-lg mb-5 lg:mx-2;

  @media (min-width: 425px) {
    max-width: 48%;
  }
  @media (min-width: 1024px) {
    max-width: 212px;
  }
  &.green {
    background: linear-gradient(120.38deg, #DCFCE7 3.62%, #86EFAC 97.3%);
  }
}
.picture {
  @apply rounded-xl w-full sm:w-auto;
  @media (min-width: 640px) {
    max-height: 320px;
  }
}
</style>
