<template>
  <div class="mobile-menu block md:hidden mb-24 md:mb-0">
    <div class="h-24 fixed inset-0 z-30 bg-white flex items-center justify-between border-b-2">
      <div class="w-1/2 m-6">
        <img src="/public/images/melanoma-en-espanol-logo.png" alt />
      </div>
      <div class="mr-3">
        <button
          v-if="!isOpen"
          @click="isOpen = true"
          type="button"
          id="sidebar-open"
          class="text-gray-500 focus:outline-none focus:text-gray-700 flex p-2 items-center lg:hidden border rounded-md"
        >
          <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <button
          v-if="isOpen"
          @click="isOpen = false"
          type="button"
          id="sidebar-close"
          class="text-gray-500 focus:outline-none focus:text-gray-700 flex p-2 items-center lg:hidden border rounded-md"
        >
          <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      v-if="isOpen"
      class="mobile-menu-items fixed inset-0 z-30 mt-24 overflow-y-scroll bg-white-100"
    >
      <div class="h-full overflow-y-scroll">
        <div class="nav-item nav-item--active">
          <a href="/">Inicio</a>
        </div>
        <div class="nav-item">
          <a href="#">Misión</a>
        </div>
        <div class="nav-item">
          <a href="#">Melanoma</a>
          <div class="pt-4 flex flex-row">
            <div class="w-1/3">
              <div class="subnav__title">Prevención</div>
              <div class="subnav__items-container">
                <a href="/melanoma/cancer-de-piel" class="subnav__item">Cáncer de Piel</a>
                <a href="/melanoma/que-es-el-melanoma" class="subnav__item">Melanoma</a>
                <a href="/melanoma/signos-del-melanoma" class="subnav__item">Signos del Melanoma</a>
                <a href="/melanoma/factores-de-riesgo" class="subnav__item">Factores de Riesgo</a>
                <a href="/melanoma/deteccion-temprana" class="subnav__item">Detección Temprana</a>
                <a
                  href="/melanoma/prevencion-del-melanoma"
                  class="subnav__item"
                >Prevención del Melanoma</a>
                <a
                  href="/melanoma/vocabulario-del-cancer"
                  class="subnav__item"
                >Vocabulario del Cáncer</a>
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
        <div class="nav-item">
          <a href="#">Blog</a>
        </div>
        <div class="nav-item">
          <a href="#">Productos Recomendados</a>
        </div>
        <div class="nav-item">
          <a href="#">Contáctanos</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
