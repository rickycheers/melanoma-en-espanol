<style>
.label-floating input:not(:placeholder-shown),
.label-floating textarea:not(:placeholder-shown) {
  padding-top: 1.4rem;
}
.label-floating input:not(:placeholder-shown) ~ label,
.label-floating textarea:not(:placeholder-shown) ~ label {
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
  color: #1f9d55;
  opacity: 1;
}
.label-floating.vf-field-touched.vf-field-invalid input:not(:placeholder-shown) ~ label,
.label-floating.vf-field-touched.vf-field-invalid textarea:not(:placeholder-shown) ~ label {
  color: red;
}
.label-floating.vf-field-touched.vf-field-invalid input:not(:placeholder-shown) ~ label,
.label-floating.vf-field-touched.vf-field-invalid textarea:not(:placeholder-shown) ~ label {
  color: red;
}
</style>

<template>
  <section class="container mx-auto">
    <article class="prose max-w-none w-full md:w-3/4">
      <h1>Contacto</h1>
      <div v-if="errorEnvio" class="inline-flex items-center bg-white leading-none text-red-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">Error</span>
        <span class="inline-flex px-2">Parece que tenemos un problema. Por favor, intenta nuevamente mas tarde.</span>
      </div>
      <div v-if="enviado" class="inline-flex items-center bg-white leading-none text-green-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">¡Éxito!</span>
        <span class="inline-flex px-2">Muchas gracias por ponerte en contacto con nosotros. De ser necesario, nos pondremos en contacto contigo lo antes posible.</span>
      </div>
      <div v-if="!enviado">
        <p>Si tienes alguna sugerancia, comentario, o algún problema relacionado con el sitio envíanos un mensaje y nos pondremos en contacto contigo lo mas pronto posible.</p>
        <vue-form :state="formState" @submit.prevent="enviar" id="contacto" class="w-full my-8 text-gray-700">
          <div class="flex flex-wrap mb-6">
            <validate class="relative w-full appearance-none label-floating">
              <input
                v-model="campos.nombre"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
                required
                minlength="2"
                class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border border-none shadow-sm rounded focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <label
                for="nombre"
                class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >Nombre</label>
              <field-messages name="nombre" show="!$focused && $dirty && $touched" class="text-red-600">
                <div slot="required">Este campo es requerido</div>
                <div slot="minlength">Campo inválido</div>
              </field-messages>
            </validate>
          </div>
          <div class="flex flex-wrap mb-6">
            <validate class="relative w-full appearance-none label-floating">
              <input
                v-model="campos.correo"
                id="correo"
                name="correo"
                type="email"
                placeholder="Correo electrónico"
                required
                class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border border-none shadow-sm rounded focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <label
                for="correo"
                class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >Correo electrónico</label>
              <field-messages name="correo" show="!$focused && $dirty && $touched" class="text-red-600">
                <div slot="required">Este campo es requerido</div>
                <div slot="email">Correo inválido</div>
              </field-messages>
            </validate>
          </div>
          <div class="flex flex-wrap mb-6">
            <validate class="relative w-full appearance-none label-floating">
              <textarea
                v-model="campos.mensaje"
                id="mensaje"
                name="mensaje"
                type="text"
                placeholder="Mensaje"
                required
                minlength="10"
                class="autoexpand tracking-wide py-2 px-4 mb-3 h-56 leading-relaxed appearance-none block w-full bg-white border border-none shadow-sm rounded focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
              <label
                for="mensaje"
                class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >Mensaje</label>
              <field-messages name="mensaje" show="!$focused && $dirty && $touched" class="text-red-600">
                <div slot="required">Este campo es requerido</div>
                <div slot="minlength">Campo inválido</div>
              </field-messages>
            </validate>
          </div>
          <div class>
            <button
              class="button p-2 w-full md:w-1/3 mx-auto bg-skin-dark-400 rounded-lg text-white"
              :class="{'opacity-50 cursor-not-allowed': formState.$invalid || enviando}"
              :disabled="formState.$invalid || enviando"
              type="submit"
            >Enviar</button>
          </div>
        </vue-form>
      </div>
    </article>
  </section>
</template>

<script>
import VueForm from 'vue-form';

export default {
  mixins: [VueForm],
  head() {
    return {
      title: "Contacto"
    }
  },
  data() {
    return {
      campos: {
        nombre: null,
        correo: null,
        mensaje: null,
      },
      enviado: false,
      enviando: false,
      errorEnvio: false,
      formState: {},
    }
  },
  methods: {
    esValido(campo) {
      return this.formState[campo] ? this.formState[campo].$valid : true
    },
    async enviar() {
      if (this.formState.$invalid) {
        return
      }

      this.enviando = true

      try {
        await fetch(`${process.env.API_HOST}/contacto`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.campos)
        })
        this.enviado = true
      } catch (e) {
        this.errorEnvio = true
        console.error(e)
      } finally {
        this.enviando = false
      }
    }
  }
}
</script>