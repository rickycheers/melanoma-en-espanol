<template>
  <div>
    <nav v-if="tipo == 'principal'" id="nav" class="vc px-5 hidden md:block bg-skin-fair-200 shadow">
      <ul>
        <li class="inline-block">
          <a href="/" class="nav-item">Inicio</a>
        </li>
        <li v-for="(item, i) in items" :key="i" class="inline-block">
          <prismic-link v-if="!item.items.length" :field="item.primary.link" class="nav-item">
            {{ item.primary.titulo[0].text }}
          </prismic-link>
          <menu-expandible v-if="item.items.length" :items="item.items">
            <prismic-link slot="link" :field="item.primary.link" class="nav-item">
              {{ item.primary.titulo[0].text }}
            </prismic-link>
            <sub-menus slot="subnav" :secciones="secciones(item.items)"></sub-menus>
          </menu-expandible>
        </li>
        <li class="inline-block">
          <a href="/unete" class="nav-item last">¡Únete!</a>
        </li>
      </ul>
    </nav>
    <mobile-menu v-if="tipo == 'principal'" class="vc"></mobile-menu>
    <sub-menus  v-if="mostrarSubmenus" :secciones="secciones(buscarPorNombre(menu))"></sub-menus>
  </div>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      default: 'principal'
    },
    menu: {
      type: String,
      default: null
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