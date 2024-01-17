<template>
    <div class="flex justify-center px-6 py-24">
        <div class="max-w-[1500px]">
            <h1 class=" text-2xl font-bold">
                Flights to Best Airports
            </h1>
            <h2 class=" pt-4 text-xl text-gray-600">
                Getting Cheap Flights & Hotels in Major Airports Worldwide for 75% OFF and More
            </h2>
            <Search />
            <div
                class="grid space-y-2 py-12 text-sm md:text-base grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-start">
                <div v-for="airline in airlines" :key="airline">
                    
                    <nuxt-link :to="stringToUrl('flights-to-'+airline+'-airline')"
                        class="hover:cursor-pointer text-sky-600 hover:text-sky-500">
                        {{ airline }} Flights
                    </nuxt-link>
                </div>
            </div>
            <!-- Detail goes here -->
            <div class="ml-2 max-w-[1500px] ">
                <div class="External Links">
                    <ul class="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mt-4 font-medium">
                        <li class="">
                            <nuxt-link to="/flights-by-cities" class="hover:text-sky-500"> Find Cheap Flights to all
                                Cities
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
                                    stroke="currentColor" stroke-width="0.8"
                                    class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link to="/flights-by-states" class="hover:text-sky-500"> Find Cheap Flights to all
                                States
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
                                    stroke="currentColor" stroke-width="0.8"
                                    class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link to="/flights-by-airlines" class="hover:text-sky-500"> Find Cheap Flights to all
                                Airlines
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
                                    stroke="currentColor" stroke-width="0.8"
                                    class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link to="/flights-by-countries" class="hover:text-sky-500"> Find Cheap Flights to all
                                Countries
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
                                    stroke="currentColor" stroke-width="0.8"
                                    class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { stringToUrl } from '../utils/functions';
import airlines from '~/content/airlines.json';
const {airlineName} = useRoute().params
// const airlines = airlineData
// console.log(airlines)
// const route = useRoute();
// const airlines = route.params.airlineData
</script>