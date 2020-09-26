<template>
  <page :document="document"></page>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    try {
      const document = (await $prismic.api.getByUID('pagina', params.uid));

      if (document.data?.pagina_padre?.uid) {
        throw "Page not found";
      }

      return {
        document,
      };
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: "Esta página no existe o no está disponible por el momento." });
    }
  }
};
</script>