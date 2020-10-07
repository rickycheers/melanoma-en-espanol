<template>
  <div>
    <header class="container mx-auto">
      <div class="hidden md:block logo w-64 p-5" style="width: 17rem;">
        <img src="/images/melanoma-en-espanol-logo.png" alt />
      </div>
      <navegacion tipo="principal" class="hidden md:block" />
      <menu-movil tipo="principal" class="block md:hidden" />
    </header>
    <Nuxt />
    <volver-arriba />
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
          <navegacion tipo="subnav" menu="Melanoma" />
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

<script>
export default {
  head() {
    return {
      title: "Melanoma en Español",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        },
      ]
    }
  }
}
</script>