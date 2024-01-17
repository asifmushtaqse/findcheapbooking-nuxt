<template>
    <div>
        <NuxtLink>
            
        </NuxtLink>
        <div class="flex justify-center">
            <div class=" px-6 py-24 max-w-[1500px]">
                <!-- Search Bar -->
                <Search />
                
                <!-- Why choose us -->
                <div class="flex flex-col  space-y-6 ">
                    <div>
                        <h1 class="font-semibold text-2xl">Why Travelers Choose Bookme</h1>
                    </div>
                    <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
                        <div class=" items-center justify-center p-6 border border-primarGray rounded-lg">
                            <h2 class="text-lg font-semibold">Best travel deals</h2>
                            <p class="">Find the best deals available from 900+ travel sites.</p>
                        </div>
                        <div class=" items-center justify-center p-6 border border-primarGray rounded-lg">
                            <h2 class="text-lg font-semibold">Search without worry</h2>
                            <p class="">The prices you see aren't affected by your searches.</p>
                        </div>
                        <div class=" items-center justify-center p-6 border border-primarGray rounded-lg">
                            <h2 class="text-lg font-semibold">Book with flexibility</h2>
                            <p class="">Easily find flights that have flexible bookings.</p>
                        </div>
                        <div class=" items-center justify-center p-6 border border-primarGray rounded-lg">
                            <h2 class="text-lg font-semibold">Trusted and free</h2>
                            <p class="">We’re completely free to use – no hidden charges or fees.</p>
                        </div>
                    </div>
                </div>
                <!-- Slide -->
                <!-- <div class="w-full object-cover rounded-lg overflow-hidden my-16">
                    <img src="../assets/img/flyte.jpg" alt="Main Image" class="hidden sm:flex">
                    <img src="../assets/img/moscow.jpg" alt="Main Image" class="sm:hidden">
                </div> -->
                <!-- Newsletter -->
                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 outline outline-primarGray mt-16 rounded-lg sm:px-10 px-4 py-6 items-center">
                    <div>
                        <img src="../assets/img/globe.png" alt="Globe" class="w-40 sm:mx-6">
                    </div>
                    <div class="flex flex-col flex-1">
                        <h1 class="texl-4xl font-bold">Receive our newsletter.</h1>
                        <p class="my-2">Sign up with email for Travel Recommendations and Private Deals.</p>
                        <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-2">
                            <input
                                class="rounded-lg outline outline-1 outline-gray-500 placeholder-gray-500 hover:bg-primarGray  px-4 py-3 w-full sm:w-3/4 "
                                type="email" placeholder="Enter your email address"
                            >
                            <button class="w-full sm:flex-1 shadow rounded-lg bg-sky-500 py-3 hover:bg-sky-600 text-white">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Carousel Portrait-->
                
                <!-- Cheap Flights -->
                <div class="mt-16">
                    <h1 class="font-semibold text-2xl">Search cheap flights by destination</h1>
                    <p class=" mt-6 md:w-3/4">
                        Save money on airfare by searching for cheap flight tickets on <span class="font-normal">Bookme</span>. <span class="font-normal">Bookme</span>
                         searches for flight deals on hundreds of airline tickets sites to help you find the cheapest flights.
                          Whether you are looking for a last minute flight or a cheap plane ticket for a later date, you can find the best deals faster at <span class="font-normal">Bookme</span>.
                    </p>
                    <div class="grid mt-8 gap-y-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                        <div>
                            <nuxt-link to="/flights-to-new-york-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to New York</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-london-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to London</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-Dubai-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Dubai</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-sydney-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Sydney</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-Paris-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Paris</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-Istanbul-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Istanbul</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-bangkok-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Bangkok</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-brussels-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Brussels</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div>
                            <nuxt-link to="/flights-to-Tokyo-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Tokyo</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-to-beijing-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Beijing</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-to-singapore-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Singapore</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-to-amsterdam-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Amsterdam</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-to-chicago-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Chicago</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-to-san-francisco-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to San Francisco</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-:to-las-vegas-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to las Vegas</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
                        <div class="hidden md:block">
                            <nuxt-link to="/flights-:to-barcelona-city" class=" hover:cursor-pointer hover:text-sky-500">
                                <span>Find Cheap Flights to Barcelona</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.8" 
                                        class="ml-2 inline-block bi bi-box-arrow-up-right" viewBox="0 0 16 16"> 
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> 
                                    </svg>
                                </span>
                            </nuxt-link>  
                        </div>
    
                    </div>
                </div>
                <!-- FAQs -->
                <div class="mt-12">
                    <h1 class="font-semibold text-2xl">Frequently asked questions</h1>
                    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-6">
                        <div>
                            <div class="flex flex-col space-y-2 ">
                                <div class="flex justify-between items-center">
                                    <p>How does Bookme find such low flight prices?</p>
                                    <button @click="show11=!show11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show11" class="">
                                    Bookme processes over 2 billion flight queries annually and each flight with its travel tracks. We have a lot of record of flights over the year.
                                </div>
                            </div>
                            <hr class="mt-2 h-[1px] bg-primarGray">                   
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>How does Bookme find such low flight prices?</p>
                                    <button @click="show12=!show12">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show12" class="">
                                    Bookme processes over 2 billion flight queries annually and each flight with its travel tracks. We have a lot of record of flights over the year.
                                </div>
                            </div>
                            <hr class="mt-2 h-[1px] bg-primarGray">                   
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>How does Bookme find such low flight prices?</p>
                                    <button @click="show13=!show13">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show13" class="">
                                    Bookme processes over 2 billion flight queries annually and each flight with its travel tracks. We have a lot of record of flights over the year.
                                </div>
                            </div>
                            <hr class="mt-2 h-[1px] bg-primarGray">                   
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>How does Bookme find such low flight prices?</p>
                                    <button @click="show14=!show14">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show14" class="">
                                    Bookme processes over 2 billion flight queries annually and each flight with its travel tracks. We have a lot of record of flights over the year.
                                </div>
                            </div>
                            <hr class="mt-2 h-[1px] bg-primarGray">                   
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>How does Bookme find such low flight prices?</p>
                                    <button @click="show15=!show15">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show15" class="">
                                    Bookme processes over 2 billion flight queries annually and each flight with its travel tracks. We have a lot of record of flights over the year.
                                </div>
                            </div>
                            <hr class="mt-2 h-[1px] bg-primarGray">                   
                        </div>
                        <div>
                            <div class="flex flex-col  ">
                                <div class="flex justify-between items-center">
                                    <p>How does Bookme find such low flight prices?</p>
                                    <button @click="show16=!show16">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show16" class="">
                                    Bookme processes over 2 billion flight queries annually and each flight with its travel tracks. We have a lot of record of flights over the year.
                                </div>
                            </div>
                            <hr class="mt-2 h-[1px] bg-primarGray">                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

var show11 = ref(false);
var show12 = ref(false);
var show13 = ref(false);
var show14 = ref(false);
var show15 = ref(false);
var show16 = ref(false);

onMounted(() => {
    window.scrollTo(0, 0)

})
</script>
