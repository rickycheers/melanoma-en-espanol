export const state = () => ({
  menus: [],
  uids: [],
  paginasInfo: [],
})

export const mutations = {
  setMenus(state, menus) {
    state.menus = menus
  },
  setAvailableUids(state, menus) {
    state.uids = menus
  },
  setPaginasInfo(state, paginasInfo) {
    state.paginasInfo = paginasInfo
  }
}

export const getters = {
  obtenerMenu: (state) => (nombre) => {
    let menus = state.menus.reduce((acc, item) => {
      acc[item.uid] = item.data.body
      return acc
    }, {})

    return menus[nombre]
  }
}

export const actions = {
  async nuxtServerInit({dispatch}, {req, $prismic}) {
    await dispatch('fetchMenus', $prismic)
  },

  async fetchMenus({commit, state}, $prismic) {
    try {
      const document = await $prismic.api.query([
        $prismic.predicates.at('document.type', 'menu'),
      ])
      commit('setMenus', document.results)
    } catch (e) {
      console.error(e)
    }
  },
}
