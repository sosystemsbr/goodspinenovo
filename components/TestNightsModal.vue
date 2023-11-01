<template>
  <modal
    class="test-nights"
    name="test-nights"
    :resizable="true"
    :adaptive="true"
    :maxWidth="1100"
    :maxHeight="700"
    :scrollable="true"
    :width="'95%'"
    :height="'auto'"
  >
    <TestNights :closeButton="true" v-on:close="close" />
  </modal>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('test-nights')
    },
    close() {
      this.$modal.hide('test-nights')
    }
  },
  mounted() {
    const _self = this
    let show = true

    if(this.$isMobile()) {
      setTimeout(() => {
        this.show()
      }, 16000)
    }

    else {
      document.body.addEventListener('mouseout', function(e) {
        if (!e.relatedTarget && !e.toElement && show) {
          show = false
          _self.show()
        }
      })
    }
  },
}
</script>

<style lang="scss">
.test-nights {
  .vm--modal {
    @apply overflow-y-scroll;
    background-color: #581C87;
    @media (min-width: 475px) {
      &::-webkit-scrollbar {
        width: 8px;
        background-color: rgba(#6B21A8, .8);
      }
      &::-webkit-scrollbar-track {
        box-shadow: none;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(#6B21A8, .6);
        border-radius: 0;
        outline: none;
      }
    }
    @media (min-width: 767px) {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
