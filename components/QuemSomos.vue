<template>
  <div class="pt-10 lg:pt-48 pb-14" style="background: linear-gradient(109.53deg, #0D72AE 5.14%, #56A5D4 94.13%);">
    <div class="container text-white pt-10" id="quem-somos">
      <div class="flex flex-col lg:flex-row">
        <div class="lg:pr-20 box-grid mb-6 lg:mb-0 lg:mr-4 lg:mt-32">
          <h2 class="text-3xl lg:text-5xl mb-3 lg:mb-6">Quem Somos?</h2>
          <p class="text-lg md:text-xl">Quiropraxistas são a peça essencial no desenvolvimento de todos os produtos GoodSpine. Através desses profissionais conseguimos colocar o foco dos nossos produtos na saúde da coluna vertebral. Devido ao sucesso dessa parceria e da real eficácia dos produtos GoodSpine, somos a única empresa no Brasil com o Selo da Associação Brasileira de Quiropraxia em nossos produtos desde nossa fundação.</p>
        </div>
        <div class="flex justify-center lg:justify-start box-grid">
          <div class="mt-28 mr-4 relative">
            <div class="relative">
              <img class="absolute logo-effect" src="../assets/images/icons/icon-logo-effect.svg" alt="Ícone ilustrativo">
              <img src="../assets/images/perfil-roberto.png" alt="Foto de perfil do dr. Roberto S. Bleier Filho" style="width: 265px;">
            </div>
            <p class="z-10 relative ml-3 md:ml-5 inter-500 text-xl md:text-2xl -mt-2 md:-mt-6">Dr. Roberto S. Bleier Filho</p>
            <p class="ml-3 md:ml-6 text-sm sm:text-base" style="max-width: 224px; color: #073E5F;">Quiropraxista ABQ 0108 CEO Fundador da GoodSpine</p>
          </div>
          <div>
            <img src="../assets/images/perfil-gisele.png" alt="Foto de perfil da Gisele Gaia" style="width: 190px;">
            <p class="z-10 relative ml-3 md:ml-6 inter-500 text-xl md:text-2xl -mt-2 md:-mt-6">Gisele Gaia</p>
            <p class="ml-3 md:ml-6 text-sm sm:text-base" style="max-width: 224px; color: #073E5F;">Cofundadora e CCO GoodSpine</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-grid {
  flex-basis: 50%;
}
.logo-effect {
  bottom: 58px;
  right: -215px;
  @media (max-width: 600px) {
    max-width: 140px;
    right: -80px;
  }
  @media (max-width: 400px) {
    max-width: 120px;
    right: -80px;
    bottom: 28px;
  }
}
</style>
