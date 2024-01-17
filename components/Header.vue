<template>
    <div
        class="fixed top-0 z-50 flex font-medium py-6 px-4 w-full text-lg text-gray-900 justify-between items-center border-b-[1px] border-primarGray bg-white">
        <div class="flex items-center relative md:hidden">
            <button @click="menu = !menu" >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/> </g> 
                </svg>                  
            </button>
            <div class="">
                <ul v-show="menu" class="absolute top-0 left-0 right-0 text-gray-900 mt-11 pt-2 pb-4 -ml-4 w-48 bg-gray-50 shadow font-normal rounded-b-lg border-t-4">
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-cities"> Flights by Cities</nuxt-link>
                    </li>
                    
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-states"> Flights by States</nuxt-link>
                    </li>
                    
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-airlines"> Flights by Airlines</nuxt-link>
                    </li>
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-countries"> Flights by Countries</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <nuxt-link to="/">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-8 h-8 hover:text-sky-500"> <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                    <span class="ml-1">Find Cheap Booking</span>
                </div>
            </nuxt-link>
        </div>
        <ul class="md:flex md:space-x-6 hidden ">
            <li class=" hover:text-sky-500 hover:cursor-pointer">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="relative inline-block items-center  ">
                <button @click="show = !show" class="hover:text-sky-500 hover:cursor-pointer">
                    <nuxt-link to="">Flights</nuxt-link>
                    <span class="inline-block ml-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
                <ul v-show="show" class="absolute slide-fade top-0 left-0 right-0 mt-11 -ml-10 pt-2 pb-4 w-56 bg-gray-50 shadow text-gray-700 font-normal rounded-b-lg border-t-4">
                    
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-cities"> Flights by Cities</nuxt-link>
                    </li>
                    <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-states"> Flights by States</nuxt-link>
                    </li>
                    <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-airlines"> Flights by Airlines</nuxt-link>
                    </li>
                    <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
                    <li class="hover:text-sky-500 py-2 px-2">
                        <nuxt-link to="/flights-by-countries"> Flights by Countries</nuxt-link>
                    </li>

                </ul>
            </li>
            <li class=" hover:text-sky-500 hover:cursor-pointer">
                <nuxt-link to="/contact-us">Contact</nuxt-link>
            </li>
            <li class=" hover:text-sky-500 hover:cursor-pointer">
                <nuxt-link to="/about-us">About</nuxt-link>
            </li>
        </ul>
        <div class=" ">
            <!-- <nuxt-link to="/signin">
                <button class="flex text-sky-500 rounded-full px-2 py-1 outline outline-2 outline-sky-500 hover:outline-sky-600  hover:text-sky-600">
                    Sign in
                </button>
            </nuxt-link> -->
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

var show = ref(false);
var menu = ref(false);

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.3s ease-in;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }
</style>