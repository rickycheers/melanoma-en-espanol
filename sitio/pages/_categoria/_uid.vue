<template>
  <page :document="document"></page>
</template>

<script>
export default {
  head() {
    let titulo = this.$prismic.asText(this.document.data.titulo)
    return {
      title: titulo,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: titulo
        },
      ]
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const document = (await $prismic.api.getByUID('pagina', params.uid));
      // const document = await $prismic.api.query([
      //   $prismic.predicates.at('document.type', 'pagina'),
      //   $prismic.predicates.at('my.pagina.pagina_padre', params.categoria),
      // ])

      // if (document.data?.pagina_padre?.uid !== params.categoria) {
      //   throw "Page not found";
      // }

      return {
        document,
      };
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: "Esta página no existe o no está disponible por el momento." });
    }
  },
  methods: {
  }
};
</script>