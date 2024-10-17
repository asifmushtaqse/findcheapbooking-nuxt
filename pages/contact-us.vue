<template>
    <div class="flex text-gray-900 justify-center px-2 sm:px-6 pt-24 min-h-screen">
        <div class="max-w-[1500px]">
          <Search />
          <div class=" mx-2">
              <h1 class="text-3xl font-semibold">Contact Us</h1>
              <p class=" mt-6 xl:w-5/6">
                At <NuxtLink class="text-sky-500 font-semibold" to="/">FindCheapBooking.com</NuxtLink>, we’re dedicated to helping you find the best deals on flights and hotels to your favorite destinations. Whether you're looking for a last-minute getaway or planning your dream vacation, our platform connects you to millions of travel options across the globe.
                <br/>
                If you have any questions or need assistance, feel free to reach out to us. Our team is here to help make your travel booking experience as smooth as possible.
              </p>
              <h1 class="mb-4 text-2xl font-medium mt-10">Contact Information:</h1>
              <h2 class="my-1">
                  <span class="font-medium text-gray-600">Phone: </span> +971525688875
              </h2>
              <h2 class="my-1">
                  <span class="font-medium text-gray-600">Email: </span> info@findcheapbooking.com
              </h2>
              <h1 class="mb-4 text-2xl font-medium mt-10">Address:</h1>
              <p class="my-1 font-medium text-gray-600">Global Platforms LLC</p>
              <p class="my-1 font-medium text-gray-600">Sharjah Media City.</p>
              <p class="font-medium text-gray-600">Sharjah, United Arab Emirates.</p>
              <p class="my-10 xl:w-5/6">
                We value your feedback and inquiries. Whether it's about booking details, travel options, or general support, our team is ready to assist you. Thank you for choosing <NuxtLink class="text-sky-500" to="/">FindCheapBooking.com</NuxtLink>—your trusted travel partner.
              </p>
          </div>
        </div>  
      </div>
</template>
<script setup>
useHead({
  title: 'Contact - FindCheapBooking',
  meta: [
    { name: 'description', content: 'FindCheapBooking.com is a trusted online portal that helps travelers find the cheapest flights and hotels worldwide through affiliates, without added fees.' }
  ],
})
</script>