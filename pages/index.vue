<template>
  <div class="bg-gradient-to-r from-yellow-300 to-blue-500 h-screen w-full">
    <header
      class="flex items-center justify-center h-full bg-fixed bg-center bg-cover bg-no-repeat opacity-60 bompietro-bkg absolute inset-0"
    >
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="w-full max-w-screen-2xl">
          <img
            class="opacity-80 object-scale-down h-80 w-full"
            src="~/assets/images/logo-confederazione.png"
            alt=""
          />
          <h1
            class="text-white text-center text-5xl antialiased font-light non-italic font-sans"
          >
            Misericordia di Bompietro
          </h1>
          <h3
            class="text-white text-center text-4xl non-italic font-thin antialiased font-sans"
          >
            #Ne Renda Merito
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
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Riggio Mario: 3299045473</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
    class="container-fluid flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover confratelli-bkg"
  >
    <!-- <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
      Parralax inline
    </div> -->
  </section>
</template>

<style>
.bompietro-bkg {
  background-image: url("~/assets/images/bompietro_d1.jpg");
}

.confratelli-bkg {
  background-image: url("~/assets/images/gruppo.jpg");
}
</style>
