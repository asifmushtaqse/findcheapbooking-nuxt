<template>
  <div
      class="fixed top-0 z-50 flex justify-between md:justify-around md:font-medium py-4 md:py-5 px-4 w-full md:text-lg text-gray-900 justify-between items-center border-b-[1px] border-gray-300 shadow bg-white">
    <!-- Mobile View -->
    <div class="flex items-center static md:hidden">
      <button @click="menu = !menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
          <g>
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
          </g>
        </svg>
      </button>
      <div class="flex flex-col w-full">
        <div v-show="menu"
             class="absolute top-[1px] left-0 right-0 text-gray-900 space-y-2 divide-gray-400 divide-y-2 mt-16 px-3 h-screen w-full bg-gray-50 shadow font-medium ">
          <ul class="pt-2">
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
                   class="w-4 h-4 ">
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <nuxt-link to="/flights-by-cities" @click="hideDropdown"> Flights by Cities</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
                   class="w-4 h-4 ">
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <nuxt-link to="/flights-by-states" @click="hideDropdown"> Flights by States</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
                   class="w-4 h-4 ">
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <nuxt-link to="/flights-by-airlines" @click="hideDropdown"> Flights by Airlines</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
                   class="w-4 h-4 ">
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <nuxt-link to="/flights-by-countries" @click="hideDropdown"> Flights by Countries</nuxt-link>
            </li>
          </ul>
          <ul class="pt-2">
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M20.2 11.825L6.2 15.6q-.65.175-1.263-.075t-.962-.825L1.7 10.9q-.275-.425-.087-.9t.687-.6l.575-.15q.25-.05.488-.012t.437.212l2.4 2l3.5-.925l-4.075-5.45q-.4-.525-.2-1.137t.85-.788l.525-.125q.275-.075.588-.025t.537.25L14.9 9.125l4.25-1.15q.8-.225 1.513.188t.937 1.212t-.187 1.513t-1.213.937M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z"/>
              </svg>
              <nuxt-link to="/flights-to-new-york-city" @click="hideDropdown"> Cheap Flights to New York</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M20.2 11.825L6.2 15.6q-.65.175-1.263-.075t-.962-.825L1.7 10.9q-.275-.425-.087-.9t.687-.6l.575-.15q.25-.05.488-.012t.437.212l2.4 2l3.5-.925l-4.075-5.45q-.4-.525-.2-1.137t.85-.788l.525-.125q.275-.075.588-.025t.537.25L14.9 9.125l4.25-1.15q.8-.225 1.513.188t.937 1.212t-.187 1.513t-1.213.937M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z"/>
              </svg>
              <nuxt-link to="/flights-to-london-city" @click="hideDropdown"> Cheap Flights to london</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M20.2 11.825L6.2 15.6q-.65.175-1.263-.075t-.962-.825L1.7 10.9q-.275-.425-.087-.9t.687-.6l.575-.15q.25-.05.488-.012t.437.212l2.4 2l3.5-.925l-4.075-5.45q-.4-.525-.2-1.137t.85-.788l.525-.125q.275-.075.588-.025t.537.25L14.9 9.125l4.25-1.15q.8-.225 1.513.188t.937 1.212t-.187 1.513t-1.213.937M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z"/>
              </svg>
              <nuxt-link to="/flights-to-dubai-city" @click="hideDropdown"> Cheap Flights to Dubai</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M20.2 11.825L6.2 15.6q-.65.175-1.263-.075t-.962-.825L1.7 10.9q-.275-.425-.087-.9t.687-.6l.575-.15q.25-.05.488-.012t.437.212l2.4 2l3.5-.925l-4.075-5.45q-.4-.525-.2-1.137t.85-.788l.525-.125q.275-.075.588-.025t.537.25L14.9 9.125l4.25-1.15q.8-.225 1.513.188t.937 1.212t-.187 1.513t-1.213.937M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z"/>
              </svg>
              <nuxt-link to="/flights-to-paris-city" @click="hideDropdown"> Cheap Flights to Paris</nuxt-link>
            </li>

          </ul>

          <ul class="pt-2">
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M2 20L13 4h9l-3 16zm12.5-6q1.05 0 1.775-.725T17 11.5t-.725-1.775T14.5 9t-1.775.725T12 11.5t.725 1.775T14.5 14"/>
              </svg>
              <nuxt-link to="/flights-to-singapure-airlines" @click="hideDropdown">Singapore Airlines</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M2 20L13 4h9l-3 16zm12.5-6q1.05 0 1.775-.725T17 11.5t-.725-1.775T14.5 9t-1.775.725T12 11.5t.725 1.775T14.5 14"/>
              </svg>
              <nuxt-link to="/flights-to-emirates-airlines" @click="hideDropdown">Emirates Fly Better</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M2 20L13 4h9l-3 16zm12.5-6q1.05 0 1.775-.725T17 11.5t-.725-1.775T14.5 9t-1.775.725T12 11.5t.725 1.775T14.5 14"/>
              </svg>
              <nuxt-link to="/flights-to-qatar-airlines" @click="hideDropdown"> Qatar Airways</nuxt-link>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M2 20L13 4h9l-3 16zm12.5-6q1.05 0 1.775-.725T17 11.5t-.725-1.775T14.5 9t-1.775.725T12 11.5t.725 1.775T14.5 14"/>
              </svg>
              <nuxt-link to="/flights-to-cathay-airlines" @click="hideDropdown"> Cathay Pacific</nuxt-link>
            </li>
          </ul>

          <ul class="pt-2">
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <g fill="none">
                  <path
                      d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/>
                  <path fill="currentColor"
                        d="M16 7A5 5 0 1 1 6 7a5 5 0 0 1 10 0m-5 6c2.396 0 4.575.694 6.178 1.672c.8.488 1.484 1.064 1.978 1.69c.486.615.844 1.351.844 2.138c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m10 0a1 1 0 0 1 .117 1.993L21 15h-1a1 1 0 0 1-.117-1.993L20 13zm-3-2a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m0-4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"/>
                </g>
              </svg>
              <NuxtLink to="/contact-us" @click="hideDropdown"> Contact Us</NuxtLink>
            </li>
            <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 32 32">
                <path fill="none"
                      d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5"/>
                <path fill="currentColor"
                      d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0"/>
              </svg>
              <NuxtLink to="/about-us" @click="hideDropdown">About Us</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--   Desktop View   -->
    <div>
      <nuxt-link to="/" class="flex">
        <div class="flex items-center hover:text-sky-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
               class="w-6 h-6 ">
            <path
                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
          <span class="ml-1 md:text-xl font-bold" @click="hideDropdown">Find Cheap Booking</span>
        </div>
      </nuxt-link>
    </div>
    <ul class="md:flex md:space-x-6 hidden ">
      <li class=" hover:text-sky-500 hover:cursor-pointer">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="relative inline-block items-center  " ref="dropdownRef">
        <button @mouseenter="showFlights=true" @mouseleave="handleMouseLeave"
                class="hover:text-sky-500 hover:cursor-pointer flex items-center group">
          <nuxt-link to="">Flights</nuxt-link>
          <span class="inline-block ml-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                             stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </span>
        </button>
        <ul v-show="showFlights"
            class="absolute  slide-fade top-0 left-0 right-0 mt-12 px-6 pt-4 pb-8 w-56 -ml-6 space-y-2 bg-gray-50 rounded-lg shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] text-gray-700 font-normal "
            @mouseenter="showFlights = true"
            @mouseleave="handleMouseLeave">
          <li class="font-bold text-lg">Worldwide Flights</li>
          <li class="hover:text-sky-500 ">
            <nuxt-link to="/flights-by-cities" @click="hideDropdown"> Flights by Cities</nuxt-link>
          </li>
          <li class="hover:text-sky-500 ">
            <nuxt-link to="/flights-by-states" @click="hideDropdown"> Flights by States</nuxt-link>
          </li>
          <li class="hover:text-sky-500 ">
            <nuxt-link to="/flights-by-airlines" @click="hideDropdown"> Flights by Airlines</nuxt-link>
          </li>
          <li class="hover:text-sky-500 ">
            <nuxt-link to="/flights-by-countries" @click="hideDropdown"> Flights by Countries</nuxt-link>
          </li>

        </ul>
      </li>

      <li class="relative inline-block items-center  " ref="dropdownRef2">
        <button @mouseenter="showDeals=true" @mouseleave="handleMouseLeave2"
                class="hover:text-sky-500 hover:cursor-pointer flex items-center">
          <nuxt-link to="">Top Deals</nuxt-link>
          <span class="inline-block ml-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                             stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </span>
        </button>
        <div v-show="showDeals"
             class="absolute slide-fade grid grid-cols-4 gap-2 xl:px-6 px-2 pt-4 pb-8 top-0 left-0 right-0 mt-12 xl:-ml-80 -ml-[450px] min-w-[700px] bg-gray-50 rounded-lg shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] text-gray-700 font-normal "
             @mouseenter="showDeals = true"
             @mouseleave="handleMouseLeave2">
          <ul class="flex flex-col space-y-2">
            <li class="font-bold text-lg ">Top Destinations</li>
            <li class=" ">
              <nuxt-link to="/flights-to-london-city" @click="hideDropdown"> Flights to london</nuxt-link>
            </li>
            <li class=" ">
              <nuxt-link to="/flights-to-dubai-city" @click="hideDropdown"> Flights to Dubai</nuxt-link>
            </li>
            <li class=" ">
              <nuxt-link to="/flights-to-paris-city" @click="hideDropdown"> Flights to Paris</nuxt-link>
            </li>
            <li class=" ">
              <nuxt-link to="/flights-to-tokyo-city" @click="hideDropdown"> Flights to Tokyo</nuxt-link>
            </li>
          </ul>
          <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
          <ul class="flex flex-col space-y-2">
            <li class="font-bold text-lg ">Budget Flights</li>
            <li>
              <nuxt-link to="/flights-to-ryanair-airlines" @click="hideDropdown">RyanAir Airlines</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-easyjet-airlines" @click="hideDropdown">Easyjet Airlines</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-air-southwest-airlines" @click="hideDropdown">SouthWest Airlines</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-airasia-x-airlines" @click="hideDropdown">AirAsia Airlines</nuxt-link>
            </li>
          </ul>

          <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
          <ul class="flex flex-col space-y-2">
            <li class="font-bold text-lg ">Premium Flights</li>
            <li>
              <nuxt-link to="/flights-to-singapure-airlines" @click="hideDropdown">Singapore Airlines</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-emirates-airlines" @click="hideDropdown">Emirates</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-qatar-airlines" @click="hideDropdown">Qatar Airways</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-cathay-airlines" @click="hideDropdown">Cathay Pacific</nuxt-link>
            </li>
          </ul>
          <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
          <ul class="flex flex-col space-y-2">
            <li class="font-bold text-lg ">Charter Flights</li>
            <li>
              <nuxt-link to="/flights-to-air-charter-airlines" @click="hideDropdown">Air Charter</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-NetJets-airlines" @click="hideDropdown">NetJets</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-VistaJet-airlines" @click="hideDropdown">VisaJet</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/flights-to-PrivateFly-airlines" @click="hideDropdown">PrivateFly</nuxt-link>
            </li>
          </ul>
        </div>
      </li>

      <li class=" hover:text-sky-500 hover:cursor-pointer">
        <NuxtLink to="/contact-us">Contact</NuxtLink>
      </li>

      <li class=" hover:text-sky-500 hover:cursor-pointer">
        <NuxtLink to="/about-us">About</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>

let showFlights = ref(false);
let showDeals = ref(false);
let menu = ref(false);
const dropdownRef = ref(null);
const dropdownRef2 = ref(null);

const hideDropdown = () => {
  showFlights.value = false;
  showDeals.value = false;
  menu.value = false;
};

// Handle mouse leave for both Flights menu and dropdown
const handleMouseLeave = () => {
  setTimeout(() => {
    if (!dropdownRef.value.contains(document.querySelector(':hover'))) {
      showFlights.value = false;
    }
  }, 500);
};
const handleMouseLeave2 = () => {
  setTimeout(() => {
    if (!dropdownRef2.value.contains(document.querySelector(':hover'))) {
      showDeals.value = false;
    }
  }, 500);
};
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