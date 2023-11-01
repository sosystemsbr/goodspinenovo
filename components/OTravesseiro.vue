<template>
  <div class="container py-5 pb-16 md:pb-28">
    <div class="mx-auto md:mx-0 md:max-w-full">
      <h2 class="text-3xl md:text-6xl text-gray-800 mb-4">O travesseiro certo pode mudar sua vida</h2>
      <p class="text-gray-500 text-xl mb-12">Através de sua tecnologia inovadora o travesseiro GS11 ajuda a resolver estes problemas naturalmente</p>
    </div>
    <div class="flex justify-between flex-col-reverse lg:flex-row">
      <div class="lg:mr-24">
        <a href="#tecnologia" v-smooth-scroll class="button-hover" :class="{'is-active': index==1}" @mouseover="changeImage(1)">
          <img class="mr-3 md:mr-6" src="../assets/images/icons/icon-ajuste-altura.svg" alt="Ícone ilustrativo">
          <div>
            <h3 class="inter-500 mb-2 text-xl sm:leading-none md:text-2xl">Sistema de medição do travesseiro ideal</h3>
            <p class="text-gray-500 text-sm md:text-md">Sistema exclusivo criado e patenteado por nossos desenvolvedores para encontrar a altura perfeita do seu travesseiro</p>
          </div>
        </a>
        <a href="#tecnologia" v-smooth-scroll class="button-hover" :class="{'is-active': index==2}" @mouseover="changeImage(2)">
          <img class="mr-3 md:mr-6" src="../assets/images/icons/icon-conforto.png" alt="Ícone ilustrativo">
          <div>
            <h3 class="inter-500 mb-2 text-xl sm:leading-none md:text-2xl">Conforto e ergonomia juntos</h3>
            <p class="text-gray-500 text-sm md:text-md">Com o seu topo anatômico o GS11 foi desenvolvido para proporcionar o encaixe anatômico perfeito, mantém o alinhamento da coluna e relaxa a musculatura</p>
          </div>
        </a>
        <a href="#tecnologia" v-smooth-scroll class="button-hover" :class="{'is-active': index==3}" @mouseover="changeImage(3)">
          <img class="mr-3 md:mr-6" src="../assets/images/icons/icon-materia-prima.svg" alt="Ícone ilustrativo">
          <div>
            <h3 class="inter-500 mb-2 text-xl sm:leading-none md:text-2xl">Matéria prima da mais alta qualidade</h3>
            <p class="text-gray-500 text-sm md:text-md">A matéria prima do GS11 foi pensada para dar o suporte ideal para a cabeça e o pescoço, mantendo a altura necessária sem perder o conforto</p>
          </div>
        </a>
      </div>
      <div class="mb-14 pt-4" id="tecnologia">
        <div style="max-width: 580px;" class="relative">
          <div>
            <img v-if="index" class="max-w-full max-w-2xl rounded-3xl relative z-10" :src="require(`../assets/images/travesseiro-0${index}.jpg`)" alt="O travesseiro">
          </div>
          <div class="image-rotate"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap mt-8 justify-center md:justify-start items-center">
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-selo-associacao-brasileira.jpg" alt="Ícone ilustrativo">
        <p>Selo da Associação Brasileira de Quiropraxia</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-garantia-anos.svg" alt="Ícone ilustrativo">
        <p>Garantia de 1 ano</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-alturas.svg" alt="Ícone ilustrativo">
        <p>Único no mundo com possibilidade de 11 alturas</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-cruz.svg" alt="Ícone ilustrativo">
        <p>Desenvolvido por especialistas da coluna vertebral</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-ipms.svg" alt="Ícone ilustrativo">
        <p>Sistema de medição da altura ideal IPMS</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-qualidade-garantida.svg" alt="Ícone ilustrativo">
        <p>Matéria-Prima de alta qualidade</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-brasil.jpg" alt="Ícone ilustrativo">
        <p>100% Feito no Brasil</p>
      </div>
      <div class="feature-card">
        <img class="mr-4" src="../assets/images/icons/icon-anti-acaro.svg" alt="Ícone ilustrativo">
        <p>Anti ácaro</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      index: 1
    }
  },
  methods: {
    changeImage: function(index) {
      this.index = index
    }
  }
}
</script>


<style lang="scss" scoped>
.feature-card {
  @apply my-4 flex items-center px-2;
  flex-basis: calc(100%/4);
  width: 280px;
  p {
    max-width: 180px;
  }
  @media (max-width: 1300px) {
    flex-basis: calc(100%/3);
  }
  @media (max-width: 1023px) {
    flex-basis: calc(100%/2);
  }
}
.button-hover {
  @apply px-3 py-4 md:p-6 mb-3 md:mb-6 flex items-start rounded-xl max-w-2xl text-left;
  &.is-active {
    background-color: #E7F2F9;
  }
}
.image-rotate {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #E5E7EB;
  bottom: 0;
  right: 0;
  transform: rotate(5deg);
  border-radius: 1.5rem;
}
</style>
