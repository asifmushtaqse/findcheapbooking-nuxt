<template>
    <div>
        <div class="max-w-[1500px] text-gray-900 border-gray-400 rounded border pt-4 my-8 shadow">
            <h2 class="ml-4 flex items-end">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z"/> </g> </svg>
                </span>
                <span class="ml-2 text-2xl">
                    {{ props.search ?? 'Search Flights' }}
                </span>
            </h2>
            <iframe src="https://findcheapbooking.com/frame/flights.html" class="search-iframe border-0 w-full h-[350px] lg:h-28"></iframe>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['search']);
</script>
