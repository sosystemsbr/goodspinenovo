<template>
  <div class="container pt-14 pb-16 md:pt-28 md:pb-36">
    <div class="md:text-center">
      <h2 class="text-gray-800 text-3xl md:text-5xl mb-8">Veja o que falamos na mídia</h2>
      <p class="text-xl mb-14 mx-auto" style="max-width: 842px;">Veja entrevistas com Dr. Roberto Bleier filho, Quiropraxista, criador do Travesseiro Anatômico Universal GS11, em diferentes programas da Televisão brasileira, falando de Temas relacionados à saúde da coluna vertebral.</p>
    </div>
    <div class="flex flex-col sm:flex-row items-center sm:items-start justify-center flex-wrap">

      <div class="video-card">
        <a
          href="https://noticias.r7.com/record-news/jornal-da-record-news/videos/especialista-fala-sobre-a-regulamentacao-da-quiropraxia-no-brasil-29072017"
          target="_blank"
          class="thumbnail"
          :style="{'background-image': 'url(' + require('../assets/images/news-r7.jpg') + ')'}"
        >
          <img class="icon-play" src="../assets/images/icons/icon-play-news.svg" alt="Ícone ilustrativo">
        </a>
        <div class="flex items-start">
          <img class="mr-2.5 mt-1" src="../assets/images/icons/logo-r7.jpg" alt="Logo R7">
          <p class="text-lg text-gray-700">Especialista fala sobre a regulamentação da quiropraxia no Brasil</p>
        </div>
      </div>

      <div class="video-card">
        <a
          href="https://g1.globo.com/google/amp/bemestar/noticia/2019/08/23/mania-de-estalar-o-pescoco-pode-causar-avc.ghtml"
          target="_blank"
          class="thumbnail"
          :style="{'background-image': 'url(' + require('../assets/images/news-globo.jpg') + ')'}"
        >
          <img class="icon-play" src="../assets/images/icons/icon-play-news.svg" alt="Ícone ilustrativo">
        </a>
        <div class="flex items-start">
          <img class="mr-2.5 mt-1" src="../assets/images/icons/logo-globo.jpg" alt="Logo R7">
          <p class="text-lg text-gray-700">Especialistas explicam que 25% dos AVCs em pessoas menores de 40 anos acontecem por causa do estalo no pescoço</p>
        </div>
      </div>

      <div class="video-card">
        <a
          href="https://globoplay.globo.com/v/5660729/"
          target="_blank"
          class="thumbnail"
          :style="{'background-image': 'url(' + require('../assets/images/news-g1.jpg') + ')'}"
        >
          <img class="icon-play" src="../assets/images/icons/icon-play-news.svg" alt="Ícone ilustrativo">
        </a>
        <div class="flex items-start">
          <img class="mr-2.5 mt-1" src="../assets/images/icons/logo-g1.jpg" alt="Logo R7">
          <p class="text-lg text-gray-700">Quiropraxia ajuda a realinhar a coluna e evita dores</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-card {
  width: 100%;
  margin: 20px 0;

  @media (min-width: 426px) {
    max-width: 334px;
    margin-left: 14px;
    margin-right: 14px;
  }

  .thumbnail {
    @apply mb-4 relative block bg-center bg-no-repeat bg-cover rounded-lg;
    width: 100%;
    height: 180px;

    @media (min-width: 426px) {
      height: 211px;
    }
  }

  .icon-play {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 76px;
  }
}
</style>
