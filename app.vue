<template>
  <nav
    :class="{ change_color: scrollPosition > 800 }"
    class="bg-transparent fixed inset-x-0 z-10"
  >
    <div class="max-w-12xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a
              href="#"
              class="flex items-center py-5 px-2 text-white hover:text-gray-900"
            >
              <i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>
              <span class="font-bold">
                <img
                  class="w-16"
                  src="~/assets/images/logo_tricolore.png"
                  alt=""
                />
              </span>
            </a>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-yellow-50 hover:text-gray-900"
              >Home</a
            >
            <!-- <a href="#" class="py-5 px-3 text-yellow-50 hover:text-gray-900"
              >Contact</a
            >
            <a href="#" class="py-5 px-3 text-yellow-50 hover:text-gray-900"
              >Pricing</a
            >
            <a href="#" class="py-5 px-3 text-yellow-50 hover:text-gray-900"
              >Features</a
            > -->
          </div>
        </div>
        <!-- secondary nav -->
        <!-- <div class="hidden md:flex items-center space-x-1">
          <a href="" class="text-white py-5 px-3">Login</a>
          <a
            href=""
            class="
              py-2
              px-3
              bg-yellow-400
              text-white
              hover:bg-yellow-300
              text-sm
              hover:text-yellow-800
              rounded
              transition
              duration-300
            "
            >Signup</a
          >
        </div> -->
        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button focus:outline-none">
            <i class="bx bx-menu text-3xl mt-1"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
    </div>
  </nav>
  <div class="bg-gradient-to-r from-yellow-300 to-blue-500 h-screen w-full">
    <header
      class="
        flex
        items-center
        justify-center
        h-full
        bg-fixed bg-center bg-cover bg-no-repeat
        opacity-60
        bompietro-bkg
        absolute
        inset-0
      "
    >
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="w-full max-w-screen-2xl">
          <img
            class="opacity-80 object-scale-down h-80 w-full"
            src="~/assets/images/logo-confederazione.png"
            alt=""
          />
          <h1
            class="
              text-white text-center text-5xl
              antialiased
              font-light
              non-italic
              font-sans
            "
          >
            Misericordia di Bompietro
          </h1>
          <h3
            class="
              text-white text-center text-4xl
              non-italic
              font-thin
              antialiased
              font-sans
            "
          >
            Ne Renda Merito
          </h3>
        </div>
      </div>
    </header>
  </div>
  <section class="h-screen max-w-screen-xl m-auto">
    <div class="mt-20 sm:flex">
      <div class="rounded overflow-hidden shadow-lg">
        <video
          controls
          class="w-full"
          src="~/assets/images/video1.mp4"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            CONFRATERNITA MISERICORDIA DI BOMPIETRO AVVISO IN OTTEMPERANZA ALLE
            PRESCRIZIONI IMPARTITE DAL D.C.P.M. DEL 09/03/2020
          </div>
          <p class="text-gray-700 text-base">
            I CITTADINI ANZIANI E/O CHE SI TROVANO IN UNO STATO DI SALUTE
            PRECARIO E/O IN ISOLAMENTO DOMICILIARE POSSONO CHIAMARE I SEGUENTI
            NUMERI: RIGGIO MARIO: 3299045473 MISERENDINO NATALE: 3299045471 PER
            LA CONSEGNA DOMICILIARE DI BENI DI PRIMA NECESSITA’, ALIMENTI E
            FARMACI
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="
              inline-block
              bg-gray-200
              rounded-full
              px-3
              py-1
              text-sm
              font-semibold
              text-gray-700
              mr-2
              mb-2
            "
            >Riggio Mario: 3299045473</span
          >
          <span
            class="
              inline-block
              bg-gray-200
              rounded-full
              px-3
              py-1
              text-sm
              font-semibold
              text-gray-700
              mr-2
              mb-2
            "
            >Miserendino Natale:3299045471
          </span>
          <p class="text-gray-700 text-base mt-5">
            PER LA CONSEGNA DOMICILIARE DI BENI DI PRIMA NECESSITA’, ALIMENTI E
            FARMACI
          </p>
        </div>
      </div>
    </div>
  </section>

  <section
    class="
      container-fluid
      flex
      items-center
      justify-center
      h-screen
      m-auto
      bg-fixed bg-center bg-cover
      confratelli-bkg
    "
  >
    <!-- <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
      Parralax inline
    </div> -->
  </section>
  <footer class="bg-yellow-300 opacity-90 sticky z-20">
    <div
      class="
        max-w-7xl
        mx-auto
        py-10
        px-4
        sm:px-6
        md:flex md:items-center md:justify-between
        lg:px-8
      "
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          href="https://www.facebook.com/misericordia.bompietro"
          class="text-blue-600 0 hover:text-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a href="#" class="text-blue-600 0 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-blue-700">
          &copy; 2021 Misericordia di Bompietro - Via Roma 22 - 90020 Bompietro
          (PA) Tel. 0921561020.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      } // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(this.lastScrollPosition - currentScrollPosition) < 520) {
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      }
      return;
    },
  },
  data() {
    return {
      scrollPosition: null,
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
};
</script>
<style>
.change_color {
  opacity: 90%;
  background-color: #006195;
  box-shadow: 0 6px 15px rgba(226, 224, 191, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.bompietro-bkg {
  background-image: url("~assets/images/bompietro_d1.jpg");
}

.confratelli-bkg {
  background-image: url("~assets/images/gruppo.jpg");
}
</style>
