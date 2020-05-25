<template>
  <div class="inline-block">
    <div
      v-if="show"
      @mouseover="show = false"
      class="fixed w-full h-full inset-0 z-10 bg-transparent"
    ></div>
    <div @mouseover="show = true" class="relative z-20">
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
          <div class="w-1/3">
            <div class="subnav__title">Prevención</div>
            <div class="subnav__items-container">
              <a href="#" class="subnav__item">Cáncer de Piel</a>
              <a href="#" class="subnav__item">Melanoma</a>
              <a href="#" class="subnav__item">Signos del Melanoma</a>
              <a href="#" class="subnav__item">Factores de Riesgo</a>
              <a href="#" class="subnav__item">Detección Temprana</a>
              <a href="#" class="subnav__item">Guía de Prevención</a>
              <a href="#" class="subnav__item">Estadísticas</a>
            </div>
          </div>
          <div class="w-1/3">
            <div class="subnav__title">Diagnóstico</div>
            <div class="subnav__items-container">
              <a href="#" class="subnav__item">Tipos de Melanoma</a>
              <a href="#" class="subnav__item">Fases del Melanoma</a>
              <a href="#" class="subnav__item">Tratamientos</a>
              <a href="#" class="subnav__item">Factores de Riesgo</a>
              <a href="#" class="subnav__item">Preguntas Frecuentes</a>
              <a href="#" class="subnav__item">Estadísticas</a>
            </div>
          </div>
          <div class="w-1/3">
            <div class="subnav__title">Viviendo con melanoma</div>
            <div class="subnav__items-container">
              <a href="#" class="subnav__item">Estudios Clínicos</a>
              <a href="#" class="subnav__item">Fundaciones</a>
              <a href="#" class="subnav__item">Cuidadores</a>
              <a href="#" class="subnav__item">Links de Interés</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    handleEscape(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.show = false;
      }
    },
  },

  created() {
    document.addEventListener("keydown", this.handleEscape);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscape);
  },
};
</script>
