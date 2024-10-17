<template>
    <div>
        <div class="flex justify-center">
            <div class=" px-6 py-24 max-w-[1500px]">
                <!-- Search Bar -->
                <Search />
                <!-- Why choose us -->
                <div class="flex flex-col  space-y-6 ">
                    <div>
                        <h1 class="font-semibold text-2xl">Why Travelers Choose <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink></h1>
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

                <!-- Newsletter -->
                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 outline outline-primarGray mt-16 rounded-lg sm:px-10 px-4 py-6 items-center">
                    <div>
                        <img src="../assets/img/globe.png" alt="Globe" class="w-40 sm:mx-6">
                    </div>
                    <div class="flex flex-col flex-1">
                        <h1 class="text-4xl font-bold">Receive our newsletter.</h1>
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
                    <h1 class="font-semibold text-2xl">Discover Affordable Flights by Destination</h1>
                    <p class=" mt-6 md:w-5/6">
                      At <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink>, we help you save money on airfare by offering an advanced search engine to find the best flight deals. We compare prices from hundreds of airlines and travel sites to bring you the most affordable flight options. Whether you're planning a spontaneous trip or booking well in advance, our platform makes it easy to find cheap flights quickly and efficiently.
                      <br/>
                      With our user-friendly interface, you can search for both last-minute flights and future travel deals. Experience the convenience of finding the best airfare offers in one place and start your journey with confidence at <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink>—your go-to source for budget-friendly travel.
<!--                        Save money on airfare by searching for cheap flight tickets on <span class="font-normal"><NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink></span>. <span class="font-normal"><NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink></span>-->
<!--                         searches for flight deals on hundreds of airline tickets sites to help you find the cheapest flights.-->
<!--                          Whether you are looking for a last minute flight or a cheap plane ticket for a later date, you can find the best deals faster at <span class="font-normal"><NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink></span>.-->
                    </p>
                    <div class="grid mt-10 gap-y-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 font-medium">
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
                    <div class="grid gap-8 space-y-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  mt-6">
                        <div>
                            <div class="flex flex-col space-y-2 ">
                                <div class="flex justify-between items-center">
                                    <p>How does <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink> find such low flight prices?</p>
                                    <button @click="show11=!show11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show11" class="">
                                  <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink> compares flight prices from hundreds of airlines and travel sites globally. By aggregating millions of flight options, we help you find the most affordable airfare for your destination, whether you're booking in advance or at the last minute.
                                </div>
                            </div>
                            <hr class="mt-2 h-[2px] bg-gray-300">
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>Are there any additional fees for using <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink>?</p>
                                    <button @click="show12=!show12">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show12" class="">
                                  No, <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink> is completely free to use. We do not charge any additional fees or commissions. Once you find the flight deal you want, you’ll be redirected to our affiliate travel supplier to complete your booking directly with them.
                                </div>
                            </div>
                            <hr class="mt-2 h-[2px] bg-gray-300">
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>Can I book both international and domestic flights on <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink>?</p>
                                    <button @click="show13=!show13">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show13" class="">
                                  Yes, <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink> allows you to search and book both domestic and international flights. Our platform provides options from airlines across the globe, ensuring that you can find the best flights for your travel needs, regardless of the destination.                                </div>
                            </div>
                            <hr class="mt-2 h-[2px] bg-gray-300">
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>How do I know if my flight booking is confirmed?</p>
                                    <button @click="show14=!show14">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show14" class="">
                                  Once you select a flight and are redirected to our affiliate travel supplier, you will complete the booking process on their site. After booking, you’ll receive a confirmation email directly from the supplier, including all the details of your flight.                                </div>
                            </div>
                            <hr class="mt-2 h-[2px] bg-gray-300">
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2  ">
                                <div class="flex justify-between items-center">
                                    <p>Can I search for flights based on specific destinations?</p>
                                    <button @click="show15=!show15">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show15" class="">
                                  Yes, with <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink>, you can search for flights to any destination worldwide. Our platform allows you to input your travel dates and destination to find the cheapest available flights to that location.                                </div>
                            </div>
                            <hr class="mt-2 h-[2px] bg-gray-300">
                        </div>
                        <div>
                            <div class="flex flex-col  ">
                                <div class="flex justify-between items-center">
                                    <p>Is <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink> safe and reliable for booking flights?</p>
                                    <button @click="show16=!show16">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hover:cursor-pointer font-bold w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </button>
                                </div>
                                <div v-show="show16" class="">
                                  Absolutely. <NuxtLink to="/" class="text-sky-600">FindCheapBooking.com</NuxtLink> works with trusted affiliate partners and reputable airlines to ensure a secure and reliable booking process. We help you find the best deals while ensuring your transaction is safe and handled directly by the affiliate supplier.                                </div>
                            </div>
                            <hr class="mt-2 h-[2px] bg-gray-300">
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

    useHead({
      title: 'FindCheapBooking',
      meta: [
        { name: 'description', content: 'FindCheapBooking.com is a trusted online portal that helps travelers find the cheapest flights and hotels worldwide through affiliates, without added fees.' }
      ],
    })

onMounted(() => {
    window.scrollTo(0, 0)

})
</script>
