<template>
  <div :class="{'sticky-nav': sticky}" id="nav">
    <nav class="navigation flex items-center mx-auto" >
      <div class="container relative">
        <div class="shadow-effect relative overflow-hidden">
          <ul class="flex items-center overflow-x-scroll">
            <li class="empty"></li>
            <li>
              <a href="#melhore-seu-sono" v-smooth-scroll class="link">Melhore seu sono</a>
            </li>
            <li>
              <a href="#sobre-GS11" v-smooth-scroll class="link">O travesseiro</a>
            </li>
            <li>
              <a href="#o-que-falam-sobre-a-gente" v-smooth-scroll class="link">O que falam sobre ele</a>
            </li>
            <li>
              <a href="#opcoes-de-compra" v-smooth-scroll class="link">Opções de Compra</a>
            </li>
            <li>
              <a href="#quem-somos" v-smooth-scroll class="link">Quem somos</a>
            </li>
            <li>
              <a href="#faq" v-smooth-scroll class="link">FAQ</a>
            </li>
            <li class="ml-auto">
              <a href="#opcoes-de-compra" data-menu-highlight="false" v-smooth-scroll class="inline-block bg-blue-600 inter-700 md:hover:bg-blue-700 text-white py-3 px-5 transition duration-100 rounded-md text-lg whitespace-nowrap" id="ga-anchor-button-nagivation">Eu Quero dormir melhor</a>
            </li>
            <li class="empty"></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import highlight from '@/assets/highlightOnNavigation.js'

export default {
  data: function() {
    return {
      sticky: false
    }
  },
  mounted(){
    const navBar = document.getElementById('nav');
    const navBarHeight = navBar.offsetHeight

    window.document.onscroll = (e) => {
      if(window.scrollY > navBar.offsetTop + navBarHeight){
        document.body.style.marginTop = `${navBarHeight}px`
        this.sticky = true;
      } else if (window.scrollY + navBarHeight < navBar.offsetTop + navBarHeight) {
        document.body.style.marginTop = 0
        this.sticky = false;
      }
    }

    // highlight(navBar)
  }
}
</script>


<style lang="scss" scoped>
.sticky-nav .navigation {
  position: fixed;
  top: 0;
  width: 100vw;
  left: 0;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.1);
  animation: slide 800ms forwards;
  z-index: 100;

  @keyframes slide {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
}
.navigation {
  height: 75px;
  border-top: 1px solid #D1D5DB;
  border-bottom: 1px solid #D1D5DB;
  background: #fff;
  ul {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.link {
  @apply text-lg text-gray-700 mr-4 whitespace-nowrap;
  &.is-active,
  &:hover {
    color: #0E7FC1;
  }
}
.shadow-effect {
  @media (max-width: 1279px) {
    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 40px;
      height: 104%;
      top: -2%;
    }
    &:after {
      right: -2px;
      background-image: -webkit-gradient(90deg, rgba(255, 255, 255, 0), #fff);
      background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 0), #fff);
      background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), #fff);
    }
    &:before {
      left: -2px;
      background-image: -webkit-gradient(-90deg, rgba(255, 255, 255, 0), #fff);
      background-image: -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 0), #fff);
      background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0), #fff);
    }
    .empty {
      flex-shrink: 0;
      flex-basis: 40px;
      height: 1px;
    }
  }
}
</style>
