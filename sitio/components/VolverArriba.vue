<template>
    <transition>
      <button v-if="mostrar" class="volver-arriba" @click="subir" aria-label="Volver a arriba">
          <i class="fa fa-angle-up text-lg"></i>
      </button>
    </transition>
</template>

<script>
import throttle from 'lodash/throttle';

export default {
  data() {
    return {
      mostrar: false,
      fn: null,
    }
  },
  mounted() {
    this.fn = throttle(this.calcula, 15);
    window.addEventListener('scroll', this.fn);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.fn);
  },
  methods: {
    calcula() {
      let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.mostrar = (window.pageYOffset / altura ) > 0.10;
    },
    subir() {
      window.scroll({
        top: 0, 
        behavior: 'smooth'
      });
    }
  }
}
</script>