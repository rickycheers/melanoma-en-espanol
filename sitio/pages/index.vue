<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
        }
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://code.jquery.com/jquery-1.11.0.min.js"
        },
        {
          type: "text/javascript",
          src: "https://code.jquery.com/jquery-migrate-1.2.1.min.js"
        },
        {
          type: "text/javascript",
          src:
            "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        }
      ]
    };
  },
  mounted() {
    setTimeout(this.slider, 1)
  },
  methods: {
    slider() {
      $("#slider").slick({
        autoplay: 0,
        autoplaySpeed: 8000,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        prevArrow:
          '<button class="slick-arrow-left link"><span class="block" style="transform: scale(-1);">&#x279c;</span></button>',
        nextArrow:
          '<button class="slick-arrow-right link"><span class="block" style="transform: scale(1);">&#x279c;</span></button>'
      });
    }
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

<template>
  <div>
    <section class="container mx-auto">
      <section class="hero-section px-6 lg:px-0 z-0">
        <client-only>
          <div id="slider" class="relative">
            <!-- Carousel Body -->
            <!-- Piel Etiqueta -->
            <div class="slide">
              <div
                class="relative block lg:flex items-center shadow-md my-4 lg:h-slider2"
              >
                <div
                  class="relative w-full lg:w-2/5 h-full overflow-hidden"
                  style="min-height: 20rem;"
                >
                  <img
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/images/piel-etiqueta.png"
                    alt
                  />
                </div>
                <div class="w-full lg:w-3/5 h-full flex items-center bg-white">
                  <div class="p-12 md:pr-24 md:pl-16">
                    <p class="text-gray-700">
                      La piel es una prenda delicada y sensible al sol y no se
                      puede reemplazar por una nueva, así que protégela.
                      <br />
                      <br />La gran mayoría de los melanomas son causados por el
                      sol y los rayos UV, por lo tanto es importante cuidar
                      nuestra piel del sol, así estaremos reduciendo la
                      probabilidad de tener melanoma o algún otro tipo de cáncer
                      de piel en el futuro.
                      <br />
                      <br />
                      <a class="flex items-baseline mt-3" href="/prevencion/prevencion">
                        <span>¡Conoce nuestra guía de prevención!</span>
                        <span class="text-xs ml-1">&#x279c;</span>
                      </a>
                    </p>
                  </div>
                  <svg
                    class="hidden lg:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Tipos de Melanoma -->
            <div class="slide">
              <div
                class="relative block lg:flex items-center shadow-md my-4 lg:h-slider2"
              >
                <div
                  class="relative w-full lg:w-2/5 h-full overflow-hidden"
                  style="min-height: 20rem;"
                >
                  <img
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/images/tipos-melanoma.png"
                    alt
                  />
                </div>
                <div class="w-full lg:w-3/5 h-full flex items-center bg-white">
                  <div class="p-12 md:pr-24 md:pl-16">
                    <p class="text-gray-700">
                      ¿Sabías que el melanoma no sólo le da a personas de piel
                      clara, ojos azules, y cabello rubio o rojizo?, ¿Sabías que
                      el melanoma puede aparecer en zonas que nunca han estado
                      expuestas al sol?
                      <br />
                      <br />El Melanoma Lentiginoso Acral representa el 5% del
                      total de casos de melanoma. Es el tipo de melanoma más común
                      en gente de color, y este puede surgir en las palmas de las
                      manos, plantas de los pies o debajo de las uñas.
                      <br />
                      <br />
                      <a class="flex items-baseline mt-3" href="/diagnostico-con-melanoma/tipos-de-melanoma">
                        <span
                          >Conoce más sobre los diferentes tipos de
                          melanoma.</span
                        >
                        <span class="text-xs ml-1">&#x279c;</span>
                      </a>
                    </p>
                  </div>
                  <svg
                    class="hidden lg:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Prevención -->
            <div class="slide">
              <div
                class="relative block lg:flex items-center shadow-md my-4 lg:h-slider2"
              >
                <div
                  class="relative w-full lg:w-2/5 h-full overflow-hidden"
                  style="min-height: 20rem;"
                >
                  <img
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/images/prevencion.png"
                    alt
                  />
                </div>
                <div class="w-full lg:w-3/5 h-full flex items-center bg-white">
                  <div class="p-12 md:pr-24 md:pl-16">
                    <p class="text-gray-700">
                      No hay forma de prevenir el melanoma al 100%, pues existen
                      factores de riesgo que no podemos controlar, sin embargo, si
                      conocemos estos factores podremos estar siempre alerta de
                      cualquier cambio en nuestra piel.
                      <br />
                      <br />La detección temprana del melanoma hace la diferencia.
                      No tengas miedo de encontrar algo sospechoso, siempre es
                      mejor detectarlo a tiempo y visitar a un médico, esto puede
                      <strong>salvar tu vida</strong>.
                      <br />
                      <br />
                      <a class="flex items-baseline mt-3" href="/prevencion/factores-de-riesgo">
                        <span>Factores de riesgo del melanoma</span>
                        <span class="text-xs ml-1">&#x279c;</span>
                      </a>
                    </p>
                  </div>
                  <svg
                    class="hidden lg:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Tratamientos -->
            <div class="slide">
              <div
                class="relative block lg:flex items-center shadow-md my-4 lg:h-slider2"
              >
                <div
                  class="relative w-full lg:w-2/5 h-full overflow-hidden"
                  style="min-height: 20rem;"
                >
                  <img
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/images/tratamientos.png"
                    alt
                  />
                </div>
                <div class="w-full lg:w-3/5 h-full flex items-center bg-white">
                  <div class="p-12 md:pr-24 md:pl-16">
                    <p class="text-gray-700">
                      A pesar de que el melanoma es el tipo de cáncer de piel más
                      peligroso, en la actualidad existen nuevas opciones de
                      tratamientos que han demostrado mejorar la calidad de vida e
                      incrementar la tasa de sobrevivencia de pacientes con esta
                      enfermedad.
                      <br />
                      <br />Cuando eres diagnosticado con melanoma, las opciones
                      de tratamientos dependerán de distintos factores como la
                      fase de la enfermedad, el tipo de melanoma, la ubicación del
                      tumor y tu salud en general.
                      <br />
                      <br />
                      <a class="flex items-baseline mt-3" href="/diagnostico-con-melanoma/tratamientos-del-melanoma">
                        <span>Opciones de tratamientos</span>
                        <span class="text-xs ml-1">&#x279c;</span>
                      </a>
                    </p>
                  </div>
                  <svg
                    class="hidden lg:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </client-only>
      </section>
    </section>
    <section class="container mx-auto lg:flex">
      <div class="lg:w-1/2 bg-skin-brunette-500 p-6 md:p-16">
        <h2
          class="text-4xl font-bold text-gray-900 tracking-wide pb-4 upper text-center font-serif"
        >
          ¿Qué es el Melanoma?
        </h2>
        <p class="my-5 text-gray-900">
          El melanoma, melanoma maligno o melanoma cutáneo es un tipo de cáncer
          de piel que se origina debido al crecimiento desmedido de los
          melanocitos (células que producen melanina, la cual se encarga de
          darle color a la piel, a los ojos y al cabello.
          <br /><br />
          Este tipo de cáncer de piel es el menos común, sin embargo es el más
          agresivo ya que puede esparcirse a otros órganos rápidamente haciendo
          metástasis, si no es tratado a tiempo.
          <br /><br />
          <a
            href="/prevencion/que-es-el-melanoma"
            class="p-2 border border-skin-dark-400 text-skin-dark-400 rounded-md"
            >Conoce más</a
          >
        </p>
        <div class="border-0 tracking-widest text-center text-xl mt-5">
          . . .
        </div>
      </div>
      <div class="lg:w-1/2 bg-skin-brunette-100 p-6 md:p-16">
        <img src="/images/lunar-melanoma.png" />
      </div>
    </section>
    <section
      class="container mx-auto bg-white-100 text-gray-800 p-6 md:py-24 md:px-32 lg:py-32 lg:px-48"
    >
      <div class="w-full">
        <h2
          class="text-4xl font-bold tracking-wide upper text-center font-serif"
        >
          El Melanoma en Números
        </h2>
        <p class="mt-5 text-center">
          El melanoma es una enfermedad que debemos tomar en serio, pues aunque
          es un tipo de cáncer poco conocido o desconocido por muchos, es el más
          agresivo dentro de los diferentes tipos de cáncer de piel, el cual año
          con año va en aumento en todo el mundo, generando miles de muertes.
        </p>
        <div class="border-0 tracking-widest text-center text-xl mt-5">
          . . .
        </div>
      </div>
    </section>
    <section class="container mx-auto bg-white-100">
      <div class="flex flex-row flex-wrap">
        <div class="w-full md:w-1/3 bg-skin-fair-200">
          <img src="/images/melanoma-5-mundo.png" />
        </div>
        <div
          class="w-full md:w-1/3 h-stats2 md:h-stats1 lg:h-auto bg-skin-pale-100 relative"
        >
          <div
            class="p-12 md:p-8 text-center text-gray-800 font-serif text-lg lg:text-xl uppercase h-full flex items-center"
          >
            El melanoma es uno de los cánceres más comunes entre adolescentes y
            adultos jóvenes de entre 15 y 29 años.
          </div>
          <div
            class="absolute w-full bottom-0 text-right p-2 text-xs text-gray-800"
          >
            EPA
          </div>
        </div>
        <div class="w-full md:w-1/3 bg-white-100">
          <img src="/images/melanoma-lugar-19-mundo-lato.png" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          class="w-full md:w-1/3 h-stats2 md:h-stats1 lg:h-auto bg-skin-pale-100 relative"
        >
          <div
            class="p-12 md:p-8 text-center text-gray-800 font-serif text-lg lg:text-xl uppercase h-full flex items-center"
          >
            El 86% de los melanomas son causados por los rayos UV.
          </div>
          <div
            class="absolute w-full bottom-0 text-right p-2 text-xs text-gray-800"
          >
            Parkin DM, Mesher D, Sasieni P
          </div>
        </div>
        <div
          class="w-full md:w-1/3 h-stats2 md:h-stats1 lg:h-auto bg-skin-pale-100 text-gray-800 relative"
        >
          <img src="/images/melanona-quemaduras-riesgo.png" />
        </div>
        <div
          class="w-full md:w-1/3 h-stats2 md:h-stats1 lg:h-auto bg-skin-pale-100 relative"
        >
          <div
            class="p-12 md:p-8 text-center text-gray-800 font-serif text-lg lg:text-xl uppercase h-full flex items-center"
          >
            Sólo del 20% - 30% de los melanomas son encontrados en lunares o
            manchas existentes.
          </div>
          <div
            class="absolute w-full bottom-0 text-right p-2 text-xs text-gray-800"
          >
            Skin Cancer Foundation
          </div>
        </div>
      </div>
    </section>
    <section
      class="container mx-auto bg-white-100 text-gray-800 p-6 md:py-24 md:px-32 lg:py-32 lg:px-48"
    >
      <div class="w-full mb-8">
        <h2
          class="text-4xl font-bold tracking-wide upper text-center font-serif"
        >
          ¿Cómo prevenir el Melanoma?
        </h2>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="md:w-5/12 text-center px-5">
          <ul class="list-none list-inside leading-loose">
            <li>Limitar la exposición a los rayos UV.</li>
            <li>Usar protector solar diariamente.</li>
            <li>Estar alerta de lunares nuevos o sospechosos.</li>
            <li>Buscar la sombra.</li>
          </ul>
        </div>
        <div class="w-full md:w-2/12 text-center">
          <img src="/images/escudo.png" class="w-32 md:w-full block mx-auto" />
        </div>
        <div class="md:w-5/12 text-center px-5">
          <ul class="list-none list-inside leading-loose">
            <li>Cuidar tu sistema inmunológico.</li>
            <li>Proteger tu piel en el exterior.</li>
            <li>Evitar el uso de camas de bronceado y lámparas solares.</li>
            <li>Conocer y revisar tu piel periódicamente.</li>
          </ul>
        </div>
      </div>
      <div class="border-0 tracking-widest text-center text-xl mt-5">. . .</div>
    </section>
    <section class="container mx-auto relative lg:h-blog">
      <div
        class="bg-skin-brunette-100 absolute w-full z-0"
        style="top: 0; height: 60%;"
      ></div>
      <div
        class="bg-skin-brunette-600 absolute w-full z-0"
        style="top: 60%; height: 40%;"
      ></div>
      <div class="z-10 bg-transparent p-6 md:p-16 z-auto relative">
        <h2
          class="text-4xl font-bold lg:text-gray-800 tracking-wide pb-4 upper text-center font-serif"
        >
          Entradas del Blog
        </h2>
        <div
          class="grid lg:grid grid-cols-1 lg:grid-cols-3 gap-8 w-5/6 mx-auto h-auto"
        >
          <div class="relative mt-12 mb-6">
            <div class="absolute -mt-6">
              <img
                src="/images/1_5iIJxEnJZ1TENBw1UAaD5g@2x.jpg"
                alt=""
                class="object-cover rounded-md shadow-md h-48 w-11/12 mx-auto"
              />
            </div>
            <div class="bg-white rounded-md shadow-lg pt-48 pb-5 px-5">
              <div class="text-center h-64 overflow-scroll">
                <h4 class="mb-4">
                  ¡Hola! soy Laura y esta es mi historia con melanoma.
                </h4>
                <p class="text-gray-500 text-sm">
                  Primero quiero contarles que esto es un experimento, nunca he
                  sido mucho de escribir pero chance alguno de ustedes se puede
                  sentir identificado con mi historia, es por eso que he
                  decidido darle una oportunidad a este blog, además creo que
                  escribir mi propia historia puede ser terapéutico, así que me
                  estoy dando esta oportunidad como un regalo.
                </p>
              </div>
              <div class="mt-5 text-center">
                <a
                  href="https://medium.com/@laura.acuna.aranda/d3253f5ca40e"
                  class="btn-link"
                  target="_blank"
                  >Leer blog</a
                >
              </div>
            </div>
          </div>
          <div class="relative mt-12 mb-6">
            <div class="absolute -mt-6">
              <img
                src="/images/1_89gJswhEVMhGySaOL_MqAg@2x.jpg"
                alt=""
                class="object-cover rounded-md shadow-md h-48 w-11/12 mx-auto"
              />
            </div>
            <div class="bg-white rounded-md shadow-lg pt-48 pb-5 px-5">
              <div class="text-center h-64 overflow-scroll">
                <h4 class="mb-4">La peor noticia recibida, tienes melanoma.</h4>
                <p class="text-gray-500 text-sm">
                  Les contaré un poco los antecedentes... Cuando iba en la
                  Universidad me tuvieron que quitar un lunar por el pecho que
                  era sospechoso por su color, tamaño, forma y sensación de
                  picazón, sin embargo la conclusión fue que era un Spitz Nivo o
                  Nevo de Spitz, es decir, un lunar benigno con muchas
                  características similares a un melanoma o lunar maligno.
                </p>
              </div>
              <div class="mt-5 text-center">
                <a
                  href="https://medium.com/@laura.acuna.aranda/7c5023725391"
                  class="btn-link"
                  target="_blank"
                  >Leer blog</a
                >
              </div>
            </div>
          </div>
          <div class="relative mt-12 mb-6">
            <div class="absolute -mt-6">
              <img
                src="/images/1_zy-CTNqS9CHhMQ0kA3ysuA@2x.jpg"
                alt=""
                class="object-cover rounded-md shadow-md h-48 w-11/12 mx-auto"
              />
            </div>
            <div class="bg-white rounded-md shadow-lg pt-48 pb-5 px-5">
              <div class="text-center h-64 overflow-scroll">
                <h4 class="mb-4">
                  Viviendo con melanoma: Tengo melanoma, ¿Y ahora que sigue?
                </h4>
                <p class="text-gray-500 text-sm">
                  Lo que primero se debía hacer en mi caso era un PET scan para
                  saber en dónde estaba el cáncer. (en realidad ya me habían
                  hecho uno en México, pero era importante empezar el proceso
                  desde cero para los doctores de aquí y por cuestiones del
                  seguro médico).
                </p>
              </div>
              <div class="mt-5 text-center">
                <a
                  href="https://medium.com/@laura.acuna.aranda/14d7a673e21b"
                  class="btn-link"
                  target="_blank"
                  >Leer blog</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="container mx-auto bg-skin-brunette-600 h-auto p-6 md:px-16 md:pt-0 md:pb-16"
    >
      <div class="flex flex-col flex-wrap justify-center content-center">
        <div
          class="m-0 p-0 text-2xl md:text-3xl text-white antialiased text-center"
        >
          ¿Quiéres recibir actualizaciones del blog?
        </div>
        <div
          class="m-0 p-0 text-base md:text-xl text-white antialiased text-center"
        >
          Inscríbite para recibirlas en tu corrreo.
        </div>
        <form action="https://melanoma-espanol.us10.list-manage.com/subscribe/post?u=b21039d6e0633954c3c13f815&id=d0bfe0e43e" method="POST">
          <div class="mt-3 flex flex-row flex-wrap shadow">
            <input
              type="email"
              name="EMAIL"
              class="text-gray-800 w-2/3 p-2 rounded-l-lg"
              placeholder="nombre@correo.com"
              required
            />
            <button
              class="p-2 w-1/3 bg-skin-dark-400 rounded-r-lg text-white"
              type="submit"
            >
              Inscribirme
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
