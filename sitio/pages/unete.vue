<template>
  <section class="container mx-auto">
    <article class="prose max-w-none w-full">
      <h1>¡Únete a Nuestra Comunidad!</h1>

      <h3>Grupo de Ayuda (Facebook)</h3>
      <p>Si has sido o fuiste diagnosticado con melanoma, te invitamos a unirte a nuestro grupo de soporte en Facebook.</p>
      <p>Este grupo busca reunir en un mismo lugar las experiencias, aprendizajes, historias, consejos, y dudas de todos aquellas personas que viven con melanoma o tienen a un ser querido con esta enfermedad.</p>

      <h3>Página (Facebook)</h3>
      <p>Dale "like" a nuestra página de Facebook para mantenerte informado y conocer algunos consejos y <span class="italic">tips</span> de como protegerte y prevenir el melanoma.</p>

      <div class="flex flex-col md:flex-row">
        <div style="width: 280px;">
          <h4>Grupo de Ayuda</h4>
          <client-only>
            <div
              class="fb-group"
              data-href="https://www.facebook.com/groups/melanomaespanol/"
              data-width="280"
              data-show-social-context="true"
              data-show-metadata="false"
            >
              <blockquote
                cite="https://www.facebook.com/groups/melanomaespanol/"
                class="fb-xfbml-parse-ignore"
              >
                <a
                  href="https://www.facebook.com/groups/melanomaespanol/"
                >Melanoma en Español (grupo de ayuda)</a>
              </blockquote>
            </div>
          </client-only>
        </div>
        <div class="md:ml-8" style="width: 280px;">
          <h4>Página</h4>
          <client-only>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/melanomaespanol"
              data-tabs
              data-width
              data-height
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite="https://www.facebook.com/melanomaespanol"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/melanomaespanol">Melanoma en Español (página)</a>
              </blockquote>
            </div>
          </client-only>
        </div>
        <div class="md:ml-8" style="width: 280px">
          <h4>Chat (Discord)</h4>
          <client-only>
            <iframe src="https://discord.com/widget?id=1038828009882406943&theme=dark" width="280" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </client-only>
        </div>
      </div>

      <h3>Suscríbite para recibir noticias</h3>
      <p>Suscríbete a nuestra lista de correos para recibir noticias actualizadas y más.</p>
      <div class="w-full md:w-1/2">
        <form action="https://melanoma-espanol.us10.list-manage.com/subscribe/post?u=b21039d6e0633954c3c13f815&id=d0bfe0e43e" method="POST">
          <div class="mt-3 flex flex-row flex-wrap shadow">
            <input
              type="email"
              name="EMAIL"
              class="text-gray-800 w-2/3 p-2 rounded-l-lg"
              placeholder="nombre@correo.com"
              required
            />
            <button
              class="p-2 w-1/3 bg-skin-dark-400 rounded-r-lg text-white"
              type="submit"
            >
              Inscribirme
            </button>
          </div>
        </form>
      </div>
    </article>
    <client-only>
      <div id="fb-root"></div>
    </client-only>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Únete a nuestra comunidad",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: 'Únete'
        },
      ],
      script: [
        {
          async: true,
          defer: true,
          crosorigin: "anonymous",
          type: "text/javascript",
          src:
            "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0&appId=194643077267266&autoLogAppEvents=1",
          nonce: "qB6Fg629",
        },
      ],
    };
  },
};
</script>