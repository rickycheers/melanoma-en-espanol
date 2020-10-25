<template>
  <div class="navegacion" :class="{movil: movil}">
    <nav v-if="tipo == 'principal'" class="px-0 md:px-5 bg-skin-fair-200 shadow">
      <ul>
        <li class="block md:inline-block">
          <a href="/" class="nav-item">Inicio</a>
        </li>
        <li v-for="(item, i) in items" :key="i" class="block md:inline-block">
          <prismic-link v-if="movil || !item.items.length" :field="item.primary.link" class="nav-item" :class="{'sub-menu-padre': item.items.length}">
            {{ item.primary.titulo[0].text }}
          </prismic-link>
          <sub-menus v-if="movil && item.items.length" :tipo="tipo" :secciones="secciones(item.items)"></sub-menus>
          <menu-expandible v-if="!movil && item.items.length" :items="item.items" :movil="movil">
            <a href="javascript:void(0)" slot="link" class="nav-item">
              {{ item.primary.titulo[0].text }}
            </a>
            <sub-menus slot="subnav" :secciones="secciones(item.items)"></sub-menus>
          </menu-expandible>
        </li>
        <li class="block md:inline-block">
          <a href="/unete" class="nav-item last">¡Únete!</a>
        </li>
      </ul>
    </nav>
    <sub-menus  v-if="mostrarSubmenus" :secciones="secciones(buscarPorNombre(menu))"></sub-menus>
  </div>
</template>

<script>
export default {
  name: 'navegacion',
  props: {
    tipo: {
      type: String,
      default: 'principal'
    },
    menu: {
      type: String,
      default: null
    },
    movil: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      items: []
    }
  },

  computed: {
    mostrarSubmenus() {
      return this.tipo == 'subnav' && this.nombre !== null
    }
  },

  methods: {
    buscarPorNombre(nombre) {
      return this.items.find(item => item.primary.titulo[0].text === this.menu).items
    },
    secciones(items) {
      let seccion = 0

      return items
        .reduce((acc, item) => {
          seccion = item.separador ? seccion + 1 : seccion

          if (typeof acc[seccion] === 'undefined') {
            acc[seccion] = {titulo: item.titulo[0].text, items: []}
            return acc;
          }

          acc[seccion].items.push(item)

          return acc
        }, [])
        .filter(item => item !== undefined)
    },
  },

  created() {
    this.items = this.$store.getters.obtenerMenu("menu-principal")
  },
}
</script>