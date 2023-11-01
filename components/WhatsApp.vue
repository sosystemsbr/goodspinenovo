<template>
  <a href="https://api.whatsapp.com/send?phone=5511988520605" target="_blank">
    <img src="~/assets/images/icons/icon-whatsapp.png" alt="Logo" id="ga-whatsapp-fixed-page">
  </a>
</template>

<style lang="scss" scoped>
a {
  position: fixed;
  z-index: 99;
  bottom: 30px;
  right: 30px;
  display: inline-block;
  max-width: 60px;
  transition: all 200ms;
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    max-width: 40px;
  }
  @media (min-width: 768px) {
    opacity: 0.9;
    &:hover {
      transform: scale(1.08);
      opacity: 1;
    }
  }
}
</style>
