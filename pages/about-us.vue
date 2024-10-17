<template>
    <div>

        <div class="flex justify-center text-gray-900 px-2 sm:px-6 py-24 min-h-screen">
            <div class="max-w-[1500px]">
                <Search />
                <div class=" mx-2">
                    <h2 class="font-bold text-3xl mb-5">About Us</h2>
                    <div class="row">
                        <div class="xl:w-5/6">
                            <p><NuxtLink to="/" class="text-sky-500 font-semibold">FindCheapBooking.com</NuxtLink> is a flight and hotel
                                booking
                                online portal trusted by thousands of
                                travelers across the globe. We specialize in offering travelers all over the world the
                                cheapest flights by comparing millions of flight options from
                                various airlines across the globe through our associates and suppliers
                                affiliates. Charges are billed directly to customers by affiliate supplier on their website.
                                We
                                also compare hotel prices, offering travelers first-hand information about the
                                cheapest hotels in their destination.</p>
                            <br>
                            <p><NuxtLink class="text-sky-500 font-semibold" to="/">FindCheapBooking.com</NuxtLink> goes an extra mile in
                                helping
                                travelers to find the best
                                choice of flight tickets and discount airfares to destinations across the globe. Our online
                                portal offers search results which provide travelers with the cheapest and most up-to-date
                                prices for flights from and to any part of the world, along with real-time flight
                                statuses, departure and arrival times.</p>
                            <br>
                            <p>As a young leading online platform, <NuxtLink to="/" class="text-sky-500">FindCheapBooking.com</NuxtLink> helps today’s business and leisure
                                travelers search for the cheapest flight and hotel options with various airline and
                                accommodation suppliers. With a huge focus on affordable travel and simplifying the
                                traveling
                                and lodging experiences, we are committed to inspiring travelers around the world while
                                making
                                travel search as easy as possible through our world-class technology.</p>
                            <br>
                            <p><NuxtLink class="text-sky-500 font-semibold" to="/">FindCheapBooking.com</NuxtLink> is always free for
                                travelers,
                                there are no added fees! We never charge
                                travelers commission. Once travelers find the cheap flights or hotels which
                                they desire to book, <NuxtLink to="/" class="text-sky-500">FindCheapBooking.com</NuxtLink> transfers them to its affiliate travel suppliers
                                to
                                complete their booking.</p>
                            <br>
                            <p>At <NuxtLink to="/" class="text-sky-500 font-semibold">FindCheapBooking.com</NuxtLink>, we are dedicated to
                                rocking
                                the travel world. We want travelers to spend
                                less time planning their travels and more time enjoying it. Our desire is to save travelers
                                time, money and stress with our simple online flight and hotel booking
                                platform. We are your one-stop online travel shop. Now is the time to give up on fruitless
                                streets or web browsing for the latest flight deals. Starting from the lowest ticket prices
                                on
                                international and domestic flights from all your favorite airlines and hotel reservations
                                bookable for properties on every continent, travelers can search and get the best results on
                                our
                                portal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'About - FindCheapBooking',
  meta: [
    { name: 'description', content: 'FindCheapBooking.com is a trusted online portal that helps travelers find the cheapest flights and hotels worldwide through affiliates, without added fees.' }
  ],
})
</script>
