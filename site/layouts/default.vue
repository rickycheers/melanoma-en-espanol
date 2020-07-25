<template>
  <div>
    <header class="container mx-auto">
      <div class="hidden md:block logo w-64 p-5" style="width: 17rem;">
        <img src="/images/melanoma-en-espanol-logo.png" alt />
      </div>
      <nav id="nav" class="vc px-5 hidden md:block bg-skin-fair-200 shadow">
        <a href="/" class="nav-item nav-item--active">Inicio</a>
        <a href="#" class="nav-item">Misión</a>
        <sub-menu item="melanoma">
          <a href="#" class="nav-item">Melanoma</a>
        </sub-menu>
        <a href="#" class="nav-item">Blog</a>
        <a href="#" class="nav-item">Productos Recomendados</a>
        <a href="#" class="nav-item">Contáctanos</a>
      </nav>
      <mobile-menu class="vc"></mobile-menu>
    </header>
    <Nuxt />
    <footer
      class="container mx-auto bg-skin-pale-100 text-gray-800 h-auto pt-12 pb-6 px-6 md:px-12"
    >
      <div class="block md:flex">
        <div class="w-full md:w-1/3 px-3 mb-5">
          <div class="w-48">
            <img src="/images/melanoma-en-espanol-logo.png" alt="" />
          </div>
          <div class="mt-3">
            <a
              href="https://www.facebook.com/groups/886359095133591/"
              title="Página de Facebook de Melanoma en Español"
              class="mr-2 text-2xl"
            >
              <i class="fab fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/melanoma_espanol/"
              title="Instagram de Melanoma en Español"
              class="mr-2 text-2xl"
            >
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="w-full md:w-2/3 px-3">
          <div class="block sm:grid sm:grid-cols-3">
            <div class="">
              <div class="subnav__title">Prevención</div>
              <div class="subnav__items-container">
                <a href="/melanoma/cancer-de-piel" class="subnav__item">Cáncer de Piel</a>
                <a href="/melanoma/que-es-el-melanoma" class="subnav__item">Melanoma</a>
                <a href="/melanoma/signos-del-melanoma" class="subnav__item">Signos del Melanoma</a>
                <a href="/melanoma/factores-de-riesgo" class="subnav__item">Factores de Riesgo</a>
                <a href="/melanoma/deteccion-temprana" class="subnav__item">Detección Temprana</a>
                <a href="/melanoma/prevencion-del-melanoma" class="subnav__item">Prevención del Melanoma</a>
                <a href="/melanoma/vocabulario-del-cancer" class="subnav__item">Vocabulario del Cáncer</a>
              </div>
            </div>
            <div class="">
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
            <div class="">
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
      </div>
      <hr class="my-4" style="border-color: #dad1c9;" />
      <div class="block md:inline text-xs text-center">
        &copy; 2020 &mdash; Hecho con ❤ por Melanoma en Español
      </div>
      <div class="block md:inline text-xs text-center md:float-right">
        <a href="#" class="text-gray-800">Aviso de Privacidad</a> &CenterDot;
        <a href="/terminos-y-condiciones" class="text-gray-800">Términos y Condiciones</a>
      </div>
      <p class="mt-5 w-full md:w-3/4 m-auto text-xs text-gray-600 text-center">
        Esta información no está diseñada para remplazar una consulta, un
        diagnóstico o una recomendación de un médico. El sitio web es sólo una
        herramienta más de información. Siempre consulta a tu médico respecto a
        tu condición médica o enfermedad. Melanoma en Español no ofrece
        recomendaciones médicas, diagnósticos o tratamientos.
      </p>
    </footer>
  </div>
</template>
