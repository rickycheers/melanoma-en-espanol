<style>
  .tabla-de-contenidos {
    @apply relative mt-8 bg-skin-dark-300 border-l h-full shadow rounded;
  }

  @media (min-width: 768px) {
    .tabla-de-contenidos {
      position: sticky;
      position: -webkit-sticky;
      top: 2rem;
    }
  }
</style>

<template>
    <aside class="tabla-de-contenidos">
      <button 
        class="absolute flex text-gray-500 focus:outline-none focus:text-gray-700 p-2 items-center lg:hidden border rounded-md"
        style="right: 0.75rem; margin-top: -5px;"
        @click="alternar"
      >
        <i v-if="colapsado" class="fa fa-angle-up text-skin-pale-100"></i>
        <i v-if="!colapsado" class="fa fa-angle-down text-skin-pale-100"></i>
      </button>
      <h6 class="underline text-center text-skin-pale-100">{{ titulo }}</h6>
      <transition name="slide-fade">
        <nav v-show="!colapsado" class="tabla-conetnidos mt-4">
          <ul class="list-disc list-inside text-skin-pale-100">
            <li v-for="seccion in secciones" :key="seccion.id" class="mt-2" :class="seccion.type">
              <a :href="'#'+seccion.id" class="text-skin-pale-100 hover:text-skin-fair-300">{{ seccion.text }}</a>
            </li>
          </ul>
        </nav>
      </transition>
    </aside>
</template>

<script>
export default {
  props: {
    titulo: {
      required: true,
      type: String,
    },
    secciones: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      colapsado: false,
    }
  },
  methods: {
    alternar() {
      this.colapsado = !this.colapsado;
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  visibility: 0;
}
</style>