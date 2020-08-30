<template>
  <div class="inline-block">
    <div
      v-if="show"
      @mouseover="show = false"
      class="fixed w-full h-full inset-0 z-10 bg-transparent"
    ></div>
    <div @mouseover="show = true" class="relative z-20 w-">
      <slot></slot>
    </div>
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="-translate-y-3 scale-95 opacity-0"
      enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div class="subnav sm:block relative z-20" v-show="show">
        <div class="subnav__container">
          <div class="subnav__arrow"></div>
          <div v-for="(seccion, i) in secciones" :key="i" :class="claseColumna">
            <div class="subnav__title">{{ seccion.titulo }}</div>
            <div class="subnav__items-container">
              <prismic-link v-for="(item, j) in seccion.items" :key="j" :field="item.link" class="subnav__item">
                {{ item.titulo[0].text }}
              </prismic-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
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
    secciones() {
      let seccion = 0

      return this.items
        .reduce((acc, item) => {
          seccion = item.separador ? seccion + 1 : seccion

          if (typeof acc[seccion] === 'undefined') {
            acc[seccion] = {titulo: item.titulo[0].text, items: []}
            return acc;
          }

          acc[seccion].items.push(item)

          return acc
        }, [])
        .filter(item => item !== undefined)
    },

    claseColumna() {
      let cols = 12 % this.secciones.length === 0 ? 12 : 5
      let tamano = cols / this.secciones.length
      return `w-${tamano}/${cols}`
    },
  },

  methods: {
    handleEscape(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.show = false;
      }
    },
  },

  mounted() {
    document.addEventListener("keydown", this.handleEscape);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscape);
  },
};
</script>
