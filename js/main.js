import Vue from 'vue'
import SubMenu from './SubMenu'
import MobileMenu from './MobileMenu'

const els = document.getElementsByClassName('vc')

for (const element of els) {
  new Vue({
    el: element,
    components: {
      SubMenu,
      MobileMenu
    }
  })
}