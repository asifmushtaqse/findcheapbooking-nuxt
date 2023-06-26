<template>
    <div class="flex justify-center px-6 py-24">
        <div class="max-w-[1500px]">
            <Search />
            <!-- Page Detail goes here -->
            <div class="px-2 ">
                <div class="">
                    <p class="text-center text-3xl font-semibold">Book Hotels When Travelling in {{
                        urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</p>
                    <br>
                    <p><a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600">
                            FindCheapBooking.com</a> offers travelers first-hand
                        information about the cheapest hotels in their destination when travelling in Holidays from <span
                            class="font-semibold">{{
                                urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>. We take pride
                        in bridging the gap and eliminating the barriers and inefficiencies facing the travelers when it
                        comes
                        to finding cheap accommodation when travelling in Holidays from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>.
                        With extensive research, excellent customer service and technology anchored at the center of its
                        processes.</p>
                    <br>
                    <p> <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600">
                            FindCheapBooking.com</a> has expanded the frontiers of hotels booking to become a force to be
                        reckoned with in the travel industry. We go an extra mile in helping travelers to find the best
                        choice
                        of Hotels and the best accommodation deals at destinations when travelling in Holidays
                        from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span></p>
                    <br>
                    <p>We ensures you get the best accommodation deals when travelling in Holidays from <span
                            class="font-semibold">{{
                                urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>
                        with choices including everything from business hotels to airport hotels, luxury hotels,
                        resorts and lots more. Our online portal offers search results which provide travelers with the
                        cheapest
                        and most up-to-date prices for Hotels from various accommodation suppliers when travelling in
                        Holidays from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span> or in any part
                        of the world.</p>
                    <br>
                    <p> Our goal is to be our customers indispensable and trusted
                        travel companion by constantly exciting them with accommodation deals, packages, and services which
                        cannot be obtained elsewhere. <a href="https://findcheapbooking.com/"
                            class="underline font-medium hover:text-sky-600"> FindCheapBooking.com</a> understands that
                        everyone likes comfortable and
                        thus we provide our customers with a one-stop online booking portal for the most affordable Hotels
                        where
                        their maximum comfort can be guaranteed when travelling in Holidays from <span
                            class="font-semibold">{{
                                urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>.
                    </p>
                    <br>
                    <p>Our portal gives customers the power of choice from a broad selection of hotels, and the ability to
                        book
                        their
                        accommodation through our affiliates from the comfort of their homes and everywhere they are. At
                        <a href="https://findcheapbooking.com/" class="underline font-medium hover:text-sky-600">
                            FindCheapBooking.com</a>, we are fully committed to always helping you find the best hotel deals
                        for
                        your trip when travelling in Holidays from <span class="font-semibold">{{
                            urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }}</span>.
                    </p>
                </div>
                <ul class="font-medium text-lg space-y-2 text-sky-500 mt-10">
                    <li>
                        <nuxt-link :to="'flights-to-'+stateName+'-state'" class="hover:cursor-pointer text-sky-500 hover:text-sky-600">
                            Flights to {{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} State
                         </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="'holidays-in-' + stateName + '-state'"
                            class="hover:cursor-pointer text-sky-500 hover:text-sky-600">
                            Holidays in {{ urlToString(stateName.charAt(0).toUpperCase() + stateName.slice(1)) }} State
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