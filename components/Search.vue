<template>
    <div>
        <div class="max-w-[1500px] text-gray-900">
            <!-- Dropdown -->
            <h1 class="mt-4 text-4xl font-bold">Where are you going?</h1>

            <h2 class="mt-10 ml-4 flex items-end">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-11 w-11" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z"/> </g> </svg>
                </span>
                <span class="ml-2 text-3xl">
                    Search Flights
                </span>
            </h2>
            <iframe src="https://findcheapbooking.com/frame/flights.html" class="search-iframe border-0 w-full"></iframe>

            <!-- <div class="flex ml-2 justify-start space-x-6 mt-10">
                <div class="relative z-20">
                    <button @click="show1 = !show1" class="flex items-center">One-way
                        <span class="inline-block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <ul v-show="show1" class="absolute top-0 left-0 right-0 mt-8 px-6 py-2 w-36 bg-gray-50 shadow space-y-1 text-gray-500 font-light rounded-b-lg border-t-4 border-sky-500">
                        <li class=" hover:cursor-pointer hover:text-sky-500">One-way</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Multi-city</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Round-trip</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Trip Builder</li>
                    </ul>
                </div>
                <div class="relative z-20">
                    <button @click="show2 = !show2"  class="flex items-center">Traveler
                        <span class="inline-block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <ul v-show="show2" class="absolute top-0 left-0 right-0 mt-8 px-6 py-2 w-32 bg-gray-50 shadow space-y-1 text-gray-500 font-light rounded-b-lg border-t-4 border-sky-500">
                        <li class=" hover:cursor-pointer hover:text-sky-500">Adults</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Children</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Students</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Seniors</li>
                    </ul>
                </div>
                <div class="relative z-20">
                    <button @click="show3 = !show3"  class="flex items-center">Class
                        <span class="inline-block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <ul v-show="show3" class="absolute top-0 left-0 right-0 mt-8 px-6 py-2 w-36 bg-gray-50 shadow space-y-1 text-gray-500 font-light rounded-b-lg border-t-4 border-sky-500">
                        <li class=" hover:cursor-pointer hover:text-sky-500">Economy</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Business</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">First</li>
                        <li class=" hover:cursor-pointer hover:text-sky-500">Multiple</li>
                    </ul>
                </div>

            </div> -->
            <!-- Search Bar -->
            <!-- <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-2">
                <label class="flex py-2 space-x-2 items-center w-full md:mx-1 px-4 bg-gray-200 rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="transition rotate-45 w-6 h-6 inline-block"
                        viewBox="0 0 24 24">
                        <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                    <input type="text" placeholder="From?"
                        class=" inline-block bg-gray-200 placeholder-gray-600 text-base font-light focus:outline-none" />
                </label>

                <div class="md:flex md:mx-1 bg-gray-200 rounded-lg px-4 items-center hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7 bi bi-arrow-left-right"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>

                <label class="flex py-2 space-x-2 items-center w-full md:mx-1 px-4 bg-gray-200 rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="transition rotate-45 w-6 h-6 inline-block"
                        viewBox="0 0 24 24">
                        <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                    <input type="text" placeholder="To?"
                        class=" inline-block bg-gray-200 placeholder-gray-600 text-base font-light focus:outline-none" />
                </label>

                <label class="flex py-2 md:space-x-2  items-center w-full md:mx-1 px-4 bg-gray-200 rounded-lg ">
                    <input type="date" placeholder="Select Date"
                        class=" inline-block bg-gray-200 placeholder-gray-600 text-base font-light focus:outline-none" />
                </label>

                <Button
                    class="flex md:w-1/2 md:mx-1 text-white text-lg rounded-lg bg-sky-400 hover:bg-sky-500 py-2 px-4 space-x-1 justify-center">
                    <span class="">Search</span>
                    <span class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white"  class="mt-1.5 w-6 h-6 bi bi-search"
                            viewBox="0 0 24 24">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                </Button>

            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

var show1 = ref(false);
var show2 = ref(false);
var show3 = ref(false);
</script>
