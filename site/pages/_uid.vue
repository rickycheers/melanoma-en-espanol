<template>
  <article class="prose max-w-none">
    <h1>{{ $prismic.asText(document.data.titulo) }}</h1>
    <div v-for="(slice, index) in document.data.body" :key="index">
        <h2 v-if="slice.primary.subtitulo.length">{{ slice.primary.subtitulo[0].text }}</h2>
        <div v-html="$prismic.asHtml(slice.primary.contenido)"></div>
    </div>
    <div v-if="document.data.documentos.length">
        <h5>Documentos</h5>
        <ul>
            <li v-for="(documento, index) in document.data.documentos" :key="index">
                <prismic-link :field="documento.documento">
                    {{ documento.documento.name }} <i class="fa fa-file-pdf ml-2"></i>
                </prismic-link>
            </li>
        </ul>
    </div>
    <div v-if="document.data.referencias.length" class="foot-note mt-10 pt-5 border-t border-gray-500 prose prose-sm max-w-none">
        <h4>Referencias</h4>
        <ol title="Referencias" name="referencias" class="">
            <li v-for="(referencia, index) in document.data.referencias" :key="index">
                <prismic-link :field="referencia.referencia" :name="'referencia-' + (index + 1)">
                    {{ referencia.referencia.url }}
                </prismic-link>
            </li>
        </ol>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    try {
      const document = (await $prismic.api.getByUID('pagina', params.uid));
      console.log(document.data.body[0]);
      return {
        document,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Esta página no existe o no está disponible por el momento." });
    }
  },
};
</script>