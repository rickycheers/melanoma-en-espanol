<style>
.check input:invalid {
  border-color: red;
}
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
</style>

<template>
  <section class="container mx-auto">
    <article class="prose max-w-none w-full md:w-3/4">
      <h1>Contacto</h1>
      <p>Si tienes alguna sugerancia, comentario, o algún problema relacionado con el sitio envíanos un mensaje y nos pondremos en contacto contigo lo mas pronto posible.</p>
      <form id="contacto" class="w-full my-8 text-gray-700">
        <div class="flex flex-wrap mb-6">
          <div class="relative w-full appearance-none label-floating">
            <input
              id="nombre"
              type="text"
              placeholder="Nombre"
              required
              class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border border-none shadow-sm rounded focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <label
              for="nombre"
              class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >Nombre</label>
          </div>
        </div>
        <div class="flex flex-wrap mb-6">
          <div class="relative w-full appearance-none label-floating">
            <input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              required
              class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border border-none shadow-sm rounded focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <label
              for="email"
              class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >Correo electrónico</label>
          </div>
        </div>
        <div class="flex flex-wrap mb-6">
          <div class="relative w-full appearance-none label-floating">
            <textarea
              id="mensaje"
              type="text"
              placeholder="Mensaje"
              class="autoexpand tracking-wide py-2 px-4 mb-3 h-56 leading-relaxed appearance-none block w-full bg-white border border-none shadow-sm rounded focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
            <label
              for="mensaje"
              class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >Mensaje</label>
          </div>
        </div>
        <div class>
          <button
            class="button p-2 w-full md:w-1/3 mx-auto bg-skin-dark-400 rounded-lg text-white"
            type="submit"
          >Enviar</button>
        </div>
      </form>
    </article>
  </section>
</template>

<script>
//RED BORDER ON INVALID INPUT
// document.getElementById('contact-me').addEventListener("invalid", function (event) {
// 	this.classList.add('check');
// }, true);

// 	// TEXT AREA AUTO EXPAND
// var textarea = document.querySelector('textarea.autoexpand');

// textarea.addEventListener('keydown', autosize);

// function autosize(){
//   var el = this;
//   setTimeout(function(){
//     el.style.cssText = 'height:auto; padding: 1.4rem .2rem .5rem';

//     el.style.cssText = 'height:' + el.scrollHeight + 'px';
//   },0);
// }
</script>