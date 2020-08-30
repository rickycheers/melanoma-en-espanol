<template>
  <div>
    <nav id="nav" class="vc px-5 hidden md:block bg-skin-fair-200 shadow">
      <ul>
        <li v-for="(item, i) in obtenerMenu(nombre)" :key="i" class="inline-block">
          <prismic-link v-if="!item.items.length" :field="item.primary.link" class="nav-item">
            {{ item.primary.titulo[0].text }}
          </prismic-link>
          <sub-menu v-if="item.items.length" :items="item.items">
            <prismic-item :field="item.primary.link" class="nav-item">
              {{ item.primary.titulo[0].text }}
            </prismic-item>
          </sub-menu>
        </li>
      </ul>
    </nav>
    <mobile-menu class="vc"></mobile-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  created() {
    console.log(this.obtenerMenu(this.nombre))
  },

  props: {
    nombre: {
      type: String,
      default: 'menu-principal'
    }
  },

  computed: {
    ...mapState(['menus']),
  },

  methods: {
    obtenerMenu(nombre) {
      let menus = this.menus.reduce((acc, item) => {
        acc[item.uid] = item.data.body
        return acc
      }, {})

      return menus[nombre]
    }
  }
}
</script>