<template>
    <div class="flex justify-center px-6 py-24">
        <div class="max-w-[1500px]">
            <Search />
            <!-- Page Detail goes here -->
            <div class="px-2 ">
                <div class="">
                    <p class="text-3xl text-center font-semibold">Holidays from {{
                        urlToString(stateName.charAt(0).toUpperCase()
                            +
                            stateName.slice(1)) }}</p>
                    <p class="mt-3 text-center text-xl">Book Holidays on <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600" > FindCheapBooking.com</a> for 
                        <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span>
                    </p>
                    <br>
                    <p>Holidays from <span class="font-semibold">{{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>
                        are among the most traveled cities in the airline industry. People everywhere board an airline to
                        visit
                        family and friends from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span>. Holiday can be expensive and frustrating from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span> unless you follow a
                        few good tips. Experienced travelers know how to make the most of their holiday excursions when
                        travelling from <span class="font-semibold">{{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>.
                    </p>
                    <br>
                    <p><strong>1.</strong> Book your Holidays from <span class="font-semibold">{{
                        urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span> well in advance. Don't wait until the last minute to buy your ticket on 
                    <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600" > FindCheapBooking.com</a> .You will end up paying a premium
                        price with very limited seating. There
                        is even a chance you will get shut out due to over sold flights and no availability. That's not
                        usually
                        the case, but it happens often enough to make it extremely wise to book well in advance.</p>
                    
                    <p>It doesn't hurt to buy your tickets for Holidays from <span class="font-semibold">{{
                        urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span> a couple of months in
                        advance on <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600" > FindCheapBooking.com</a>. This will give you a nice choice of departure times and seats on
                        Flights from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span>. You can save big by being among the first to buy your ticket on <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600" > FindCheapBooking.com</a>
                        . Since holiday plans are often set months or even years in advance, get motivated early to buy your
                        holiday from <span class="font-semibold">{{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>
                        tickets. It not only gives you a better deal, but helps you enjoy the anticipation of being
                        with family and friends at a joyous time of year.
                    </p>
                    <br>
                    <p><strong>2.</strong> Airports will be busy while booking holiday from <span class="font-semibold">{{
                        urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span> right around
                        Christmas, on Thanks giving, Ramadan, EID or any other holidays season, ensures you will be one among
                        a
                        great many as crowds are shoulder to shoulder at most major airports. You still need to arrive at
                        the
                        airport a couple hours early to ensure you make your flight to avoid any flights miss to your
                        holidays.
                    </p>
                    <br>
                    <p><strong>3.</strong> Yes, you can arrive early. The general rule is luggage check in doesn't start until 3 hours before
                        the
                        flight. Many people enjoy being in the holiday crowd, watching families with small children hurrying
                        to
                        see grandma, and the festive decorations that may be in place at airport stores and desks.</p>
                    <br>
                    <p><strong>4.</strong> If you are traveling solo for Holidays from <span class="font-semibold">{{
                        urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span>. Sleeping in the airport can save you a lot of money over having to
                        pay for expensive nuxt. It's OK to sleep in seats near security. They've seen a lot of airport
                        sleepers and can often keep an eye on you and your possessions while you're off in dreamland</p>
                    <br>
                    <p>It's equally worthwhile to sleep on the plane. Book overnight travel to save big money and arrive at
                        your
                        destination in the morning rested and ready to enjoy the holidays from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span>.</p>
                    <p>Book your holiday flights from <span class="font-semibold">{{
                        urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} </span> on <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600" > FindCheapBooking.com</a>. It's never too early to start!
                    </p>
                </div>
                <ul class="font-medium text-lg space-y-2 text-sky-500 mt-10">
                    <li>
                        <nuxt-link :to="'flights-to-'+stateName+'-state'" class="hover:cursor-pointer text-sky-500 hover:text-sky-600">
                            Flights to {{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} State
                         </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="'hotels-in-' + stateName + '-state'" class="hover:cursor-pointer text-sky-500 hover:text-sky-600">
                            Hotels in {{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} State
                         </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { urlToString } from '../utils/functions'

const { stateName } = useRoute().params
</script>