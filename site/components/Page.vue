<template>
  <div class="container mx-auto">
    <article class="prose max-w-none">
      <h1>{{ $prismic.asText(document.data.titulo) }}</h1>
      <div v-for="(slice, index) in document.data.body" :key="index">
          <pre v-if="debug">{{ JSON.stringify(slice, null, '\t') }}</pre>

          <h2 v-if="slice.slice_type == 'contenido' && slice.primary.subtitulo.length">{{ slice.primary.subtitulo[0].text }}</h2>
          <div v-if="slice.slice_type == 'contenido' && slice.primary.contenido.length" v-html="$prismic.asHtml(slice.primary.contenido)"></div>
          <p v-if="slice.slice_type == 'contenido' && slice.primary.imagen.url">
            <img :src="slice.primary.imagen.url + '&w=600'" :alt="slice.primary.imagen.alt" class="block mx-auto">
          </p>

          <div v-if="slice.slice_type == 'texto_e_imagen'" class="texto-imagen">
            <img :src="slice.primary.imagen.url + '&w=800'" :alt="slice.primary.imagen.alt" :class="teiImageClasses(slice)" />
            <div v-html="$prismic.asHtml(slice.primary.contenido)" class=""></div>
          </div>

          <div v-if="slice.slice_type == 'bloque_de_imagenes' && slice.items.length" class="flex justify-center">
            <div v-for="(item, index) in slice.items" :key="index" class="w-1/2 md:w-1/4 mx-3">
              <img :src="item.imagen.url + '&w=400'" :alt="item.imagen.alt" />
            </div>
          </div>

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
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      debug: 0,
    }
  },
  methods: {
    teiImageClasses(slice) {
      let orientation = slice.primary.orden.toLocaleLowerCase() == 'imagen primero' ? 'left' : 'right';
      return [
        'float-none',
        'md:float-' + orientation,
        'w-64',
        'mx-auto',
        orientation == 'left' ? 'md:mr-5' : 'md:ml-5',
      ].join(' ');
    },
  }
};
</script>