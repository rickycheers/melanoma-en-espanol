<template>
  <div class="block sm:grid" :class="claseColumna">
    <div v-for="(seccion, i) in secciones" :key="i" >
      <div class="subnav__title">{{ seccion.titulo }}</div>
      <div class="subnav__items-container">
        <prismic-link v-for="(item, j) in seccion.items" :key="j" :field="item.link" class="subnav__item">
          {{ item.titulo[0].text }}
        </prismic-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    secciones: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    claseColumna() {
      let cols = this.secciones.length
      cols = cols > 0 && cols <= 5 ? cols : 4
      return "sm:grid-cols-"+cols
      // en caso de usar flex
      // let cols = 12 % this.secciones.length === 0 ? 12 : 5
      // let tamano = cols / this.secciones.length
      // return `w-${tamano}/${cols}`
    },
  }
};
</script>
