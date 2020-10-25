<template>
  <div class="menu-expandible inline-block">
    <div
      v-if="show"
      @mouseover="show = false"
      class="fixed w-full h-full inset-0 z-10 bg-transparent"
    ></div>
    <div @mouseover="show = true" class="relative z-20">
      <slot name="link"></slot>
    </div>
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="-translate-y-3 scale-95 opacity-0"
      enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div class="subnav sm:block relative z-20" v-show="show">
        <div class="subnav__container">
          <div class="subnav__arrow"></div>
          <slot name="subnav"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    handleEscape(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.show = false;
      }
    },
  },

  mounted() {
    document.addEventListener("keydown", this.handleEscape);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscape);
  },

  watch:{
    $route (to, from){
        this.show = false;
    }
  }
};
</script>
