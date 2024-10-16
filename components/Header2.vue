<template>
  <div class="bg-white shadow-lg py-4">
    <div class="container mx-auto flex justify-between items-center px-6">

      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-sky-600">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l4.5-4.5m0 0L12 2m-4.5 3.5L21 10m-9 5l-6.5-6.5M3 10v4.5a2 2 0 002 2h4.5" />
        </svg>
        <span class="text-2xl font-bold text-gray-800">Find Cheap Booking</span>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex space-x-8 items-center">
        <nuxt-link to="/" class="text-gray-700 hover:text-sky-600 transition duration-300">Home</nuxt-link>

        <!-- Dropdown for Flights -->
        <div class="relative">
          <button @click="show = !show" class="flex items-center text-gray-700 hover:text-sky-600 transition duration-300">
            Flights
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="ml-1 w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <ul v-show="show" class="absolute bg-white shadow-md rounded-md mt-2 w-48 py-2 text-gray-700 font-medium">
            <li class="px-4 py-2 hover:bg-sky-50 hover:text-sky-600 transition">
              <nuxt-link to="/flights-by-cities">Flights by Cities</nuxt-link>
            </li>
            <li class="px-4 py-2 hover:bg-sky-50 hover:text-sky-600 transition">
              <nuxt-link to="/flights-by-states">Flights by States</nuxt-link>
            </li>
            <li class="px-4 py-2 hover:bg-sky-50 hover:text-sky-600 transition">
              <nuxt-link to="/flights-by-airlines">Flights by Airlines</nuxt-link>
            </li>
            <li class="px-4 py-2 hover:bg-sky-50 hover:text-sky-600 transition">
              <nuxt-link to="/flights-by-countries">Flights by Countries</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Other Navigation Links -->
        <nuxt-link to="/contact" class="text-gray-700 hover:text-sky-600 transition duration-300">Contact</nuxt-link>
        <nuxt-link to="/about" class="text-gray-700 hover:text-sky-600 transition duration-300">About</nuxt-link>
      </nav>
    </div>
  </div>
<!--  <header class="bg-gradient-to-r from-sky-500 via-pink-500 to-yellow-500 text-white">-->
<!--    <nav class="container mx-auto flex justify-between items-center p-6">-->

<!--      &lt;!&ndash; Logo Section &ndash;&gt;-->
<!--      <div class="flex items-center space-x-2">-->
<!--        &lt;!&ndash; Airplane Icon (Optional) &ndash;&gt;-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l4.5-4.5m0 0L12 2m-4.5 3.5L21 10m-9 5l-6.5-6.5M3 10v4.5a2 2 0 002 2h4.5" />-->
<!--        </svg>-->
<!--        <span class="text-2xl font-bold">FlightFinder</span>-->
<!--      </div>-->

<!--      &lt;!&ndash; Navigation Links &ndash;&gt;-->
<!--      <ul class="flex space-x-8 items-center">-->
<!--        <li>-->
<!--          <a href="/" class="hover:text-sky-300 text-lg transition duration-300">Home</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="/flights" class="hover:text-sky-300 text-lg transition duration-300">Flights</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="/contact" class="hover:text-sky-300 text-lg transition duration-300">Contact</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="/about" class="hover:text-sky-300 text-lg transition duration-300">About</a>-->
<!--        </li>-->
<!--      </ul>-->

<!--      &lt;!&ndash; CTA Button &ndash;&gt;-->
<!--      <div>-->
<!--        <a href="/book" class="bg-white text-sky-500 px-4 py-2 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition duration-300">-->
<!--          Book Now-->
<!--        </a>-->
<!--      </div>-->
<!--    </nav>-->
<!--  </header>-->

</template>

<script setup>

</script>
