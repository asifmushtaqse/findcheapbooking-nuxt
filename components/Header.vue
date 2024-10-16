<template>
    <div class="fixed top-0 z-50 flex justify-between md:justify-around md:font-medium py-4 md:py-5 px-4 w-full md:text-lg text-gray-900 justify-between items-center border-b-[1px] border-gray-300 shadow bg-white">
        <!-- Mobile View -->
        <div class="flex items-center static md:hidden">
            <button @click="menu = !menu" >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/> </g> 
                </svg>
            </button>
            <div class="flex flex-col w-full">
                <div v-show="menu" class="absolute top-0 left-0 right-0 text-gray-900 space-y-2 divide-gray-400 divide-y-2 mt-16 px-3 h-screen w-full bg-slate-200 shadow font-medium ">
                    <ul class="pt-4">
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-4 h-4 "> <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <nuxt-link to="/flights-by-cities" @click="hideDropdown"> Flights by Cities</nuxt-link>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-4 h-4 "> <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <nuxt-link to="/flights-by-states" @click="hideDropdown"> Flights by States</nuxt-link>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-4 h-4 "> <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <nuxt-link to="/flights-by-airlines" @click="hideDropdown"> Flights by Airlines</nuxt-link>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-4 h-4 "> <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <nuxt-link to="/flights-by-countries" @click="hideDropdown"> Flights by Countries</nuxt-link>
                      </li>
                    </ul>
                    <ul class="pt-4">
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopHandshakeCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M22.39 12.617a1 1 0 0 0 .457-1.338L20.21 5.89a1 1 0 0 0-1.338-.458l-1.796.88a1 1 0 0 0-.458 1.337l2.638 5.389a1 1 0 0 0 1.338.458zm-3.867-5.623a.75.75 0 1 0 .66 1.347a.75.75 0 0 0-.66-1.347M7.026 5.668a1 1 0 0 0-1.33.48L3.147 11.58a1 1 0 0 0 .48 1.33l1.811.85a1 1 0 0 0 1.33-.48l2.55-5.432a1 1 0 0 0-.481-1.33zm-1.962 6.536a.75.75 0 1 0 .637-1.358a.75.75 0 0 0-.637 1.358" clip-rule="evenodd"/><path d="m17.113 8.494l.014-.002h.003a1 1 0 0 0 .717-.46l.145-.662a1 1 0 0 0-1.123-.861h-.006l-.02.003l-.067.01l-.246.035c-.209.032-.5.08-.835.14c-.661.122-1.531.307-2.272.554c-.425.142-.847.403-1.218.675c-.383.28-.772.615-1.138.955a29 29 0 0 0-1.853 1.92c-.557.63-.715 1.679-.017 2.436c.346.376.92.888 1.691 1.12c.828.25 1.766.14 2.682-.535l.721-.466q.119.09.27.218c.25.21.525.459.784.703a34 34 0 0 1 .867.847l.054.055l.013.014l.004.004l.118.122l.152.075c.58.29 1.183.17 1.573.04c.417-.141.814-.371 1.134-.583a9.4 9.4 0 0 0 1.137-.898l.02-.019l.007-.006l.002-.002h.001a1 1 0 0 0-1.376-1.452l-.001.001l-.011.01l-.05.046a8 8 0 0 1-.837.654a3 3 0 0 1-.666.354l-.023.007l-.043-.042a36 36 0 0 0-.633-.616l-.07-.067a21 21 0 0 0-.871-.78c-.277-.232-.593-.478-.876-.633c-.633-.347-1.23-.076-1.499.097l-1.043.674l-.028.021c-.431.323-.723.306-.935.242c-.226-.068-.454-.225-.66-.42a26 26 0 0 1 1.624-1.677c.332-.309.659-.587.956-.805c.31-.226.536-.347.67-.391c.608-.203 1.369-.368 2-.484a26 26 0 0 1 1-.163z"/><path fill-rule="evenodd" d="M8.629 7.072a1 1 0 0 0 .742 1.856l.026-.01l.078-.03a49 49 0 0 1 1.18-.448c.337-.123.678-.241.96-.328a6 6 0 0 1 .407-.11l.055.008q.091.014.23.044c.183.041.397.098.606.158a21 21 0 0 1 .712.217l.045.015l.01.004h.003a1 1 0 0 0 .633-1.897l-.309.928l.31-.928l-.007-.002l-.014-.004l-.052-.017a21 21 0 0 0-.782-.24a13 13 0 0 0-.722-.186A3.6 3.6 0 0 0 12 6c-.187 0-.377.04-.501.07c-.147.034-.31.08-.473.13a24 24 0 0 0-1.055.36a50 50 0 0 0-1.23.467l-.082.032zM7.183 12.77l.031.029l.091.084a100 100 0 0 0 1.374 1.252c.394.352.801.708 1.145.992q.26.216.442.352q.12.088.16.113l2.836 1.063a1 1 0 0 0 .991-.168l2.107-1.755a1 1 0 1 1 1.28 1.536l-2.106 1.756a3 3 0 0 1-2.974.504l-2.96-1.11l-.047-.024c-.281-.14-.672-.45-1.004-.726a44 44 0 0 1-1.202-1.04a96 96 0 0 1-1.403-1.28l-.094-.087l-.033-.03a1 1 0 0 1 1.366-1.461m-.748 5.089a1 1 0 0 1 1.409-.126l.958.8a1 1 0 0 0 .502.223l1.237.173a1 1 0 1 1-.278 1.981l-1.236-.173a3 3 0 0 1-1.507-.669l-.958-.8a1 1 0 0 1-.127-1.41" clip-rule="evenodd"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopHandshakeCircleFilled0)"/></g></svg>
                        <nuxt-link to="#" @click="hideDropdown"> Top Deals</nuxt-link>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopHandshakeCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M22.39 12.617a1 1 0 0 0 .457-1.338L20.21 5.89a1 1 0 0 0-1.338-.458l-1.796.88a1 1 0 0 0-.458 1.337l2.638 5.389a1 1 0 0 0 1.338.458zm-3.867-5.623a.75.75 0 1 0 .66 1.347a.75.75 0 0 0-.66-1.347M7.026 5.668a1 1 0 0 0-1.33.48L3.147 11.58a1 1 0 0 0 .48 1.33l1.811.85a1 1 0 0 0 1.33-.48l2.55-5.432a1 1 0 0 0-.481-1.33zm-1.962 6.536a.75.75 0 1 0 .637-1.358a.75.75 0 0 0-.637 1.358" clip-rule="evenodd"/><path d="m17.113 8.494l.014-.002h.003a1 1 0 0 0 .717-.46l.145-.662a1 1 0 0 0-1.123-.861h-.006l-.02.003l-.067.01l-.246.035c-.209.032-.5.08-.835.14c-.661.122-1.531.307-2.272.554c-.425.142-.847.403-1.218.675c-.383.28-.772.615-1.138.955a29 29 0 0 0-1.853 1.92c-.557.63-.715 1.679-.017 2.436c.346.376.92.888 1.691 1.12c.828.25 1.766.14 2.682-.535l.721-.466q.119.09.27.218c.25.21.525.459.784.703a34 34 0 0 1 .867.847l.054.055l.013.014l.004.004l.118.122l.152.075c.58.29 1.183.17 1.573.04c.417-.141.814-.371 1.134-.583a9.4 9.4 0 0 0 1.137-.898l.02-.019l.007-.006l.002-.002h.001a1 1 0 0 0-1.376-1.452l-.001.001l-.011.01l-.05.046a8 8 0 0 1-.837.654a3 3 0 0 1-.666.354l-.023.007l-.043-.042a36 36 0 0 0-.633-.616l-.07-.067a21 21 0 0 0-.871-.78c-.277-.232-.593-.478-.876-.633c-.633-.347-1.23-.076-1.499.097l-1.043.674l-.028.021c-.431.323-.723.306-.935.242c-.226-.068-.454-.225-.66-.42a26 26 0 0 1 1.624-1.677c.332-.309.659-.587.956-.805c.31-.226.536-.347.67-.391c.608-.203 1.369-.368 2-.484a26 26 0 0 1 1-.163z"/><path fill-rule="evenodd" d="M8.629 7.072a1 1 0 0 0 .742 1.856l.026-.01l.078-.03a49 49 0 0 1 1.18-.448c.337-.123.678-.241.96-.328a6 6 0 0 1 .407-.11l.055.008q.091.014.23.044c.183.041.397.098.606.158a21 21 0 0 1 .712.217l.045.015l.01.004h.003a1 1 0 0 0 .633-1.897l-.309.928l.31-.928l-.007-.002l-.014-.004l-.052-.017a21 21 0 0 0-.782-.24a13 13 0 0 0-.722-.186A3.6 3.6 0 0 0 12 6c-.187 0-.377.04-.501.07c-.147.034-.31.08-.473.13a24 24 0 0 0-1.055.36a50 50 0 0 0-1.23.467l-.082.032zM7.183 12.77l.031.029l.091.084a100 100 0 0 0 1.374 1.252c.394.352.801.708 1.145.992q.26.216.442.352q.12.088.16.113l2.836 1.063a1 1 0 0 0 .991-.168l2.107-1.755a1 1 0 1 1 1.28 1.536l-2.106 1.756a3 3 0 0 1-2.974.504l-2.96-1.11l-.047-.024c-.281-.14-.672-.45-1.004-.726a44 44 0 0 1-1.202-1.04a96 96 0 0 1-1.403-1.28l-.094-.087l-.033-.03a1 1 0 0 1 1.366-1.461m-.748 5.089a1 1 0 0 1 1.409-.126l.958.8a1 1 0 0 0 .502.223l1.237.173a1 1 0 1 1-.278 1.981l-1.236-.173a3 3 0 0 1-1.507-.669l-.958-.8a1 1 0 0 1-.127-1.41" clip-rule="evenodd"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopHandshakeCircleFilled0)"/></g></svg>

                        <nuxt-link to="#" @click="hideDropdown"> Deals by Interest</nuxt-link>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopHandshakeCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M22.39 12.617a1 1 0 0 0 .457-1.338L20.21 5.89a1 1 0 0 0-1.338-.458l-1.796.88a1 1 0 0 0-.458 1.337l2.638 5.389a1 1 0 0 0 1.338.458zm-3.867-5.623a.75.75 0 1 0 .66 1.347a.75.75 0 0 0-.66-1.347M7.026 5.668a1 1 0 0 0-1.33.48L3.147 11.58a1 1 0 0 0 .48 1.33l1.811.85a1 1 0 0 0 1.33-.48l2.55-5.432a1 1 0 0 0-.481-1.33zm-1.962 6.536a.75.75 0 1 0 .637-1.358a.75.75 0 0 0-.637 1.358" clip-rule="evenodd"/><path d="m17.113 8.494l.014-.002h.003a1 1 0 0 0 .717-.46l.145-.662a1 1 0 0 0-1.123-.861h-.006l-.02.003l-.067.01l-.246.035c-.209.032-.5.08-.835.14c-.661.122-1.531.307-2.272.554c-.425.142-.847.403-1.218.675c-.383.28-.772.615-1.138.955a29 29 0 0 0-1.853 1.92c-.557.63-.715 1.679-.017 2.436c.346.376.92.888 1.691 1.12c.828.25 1.766.14 2.682-.535l.721-.466q.119.09.27.218c.25.21.525.459.784.703a34 34 0 0 1 .867.847l.054.055l.013.014l.004.004l.118.122l.152.075c.58.29 1.183.17 1.573.04c.417-.141.814-.371 1.134-.583a9.4 9.4 0 0 0 1.137-.898l.02-.019l.007-.006l.002-.002h.001a1 1 0 0 0-1.376-1.452l-.001.001l-.011.01l-.05.046a8 8 0 0 1-.837.654a3 3 0 0 1-.666.354l-.023.007l-.043-.042a36 36 0 0 0-.633-.616l-.07-.067a21 21 0 0 0-.871-.78c-.277-.232-.593-.478-.876-.633c-.633-.347-1.23-.076-1.499.097l-1.043.674l-.028.021c-.431.323-.723.306-.935.242c-.226-.068-.454-.225-.66-.42a26 26 0 0 1 1.624-1.677c.332-.309.659-.587.956-.805c.31-.226.536-.347.67-.391c.608-.203 1.369-.368 2-.484a26 26 0 0 1 1-.163z"/><path fill-rule="evenodd" d="M8.629 7.072a1 1 0 0 0 .742 1.856l.026-.01l.078-.03a49 49 0 0 1 1.18-.448c.337-.123.678-.241.96-.328a6 6 0 0 1 .407-.11l.055.008q.091.014.23.044c.183.041.397.098.606.158a21 21 0 0 1 .712.217l.045.015l.01.004h.003a1 1 0 0 0 .633-1.897l-.309.928l.31-.928l-.007-.002l-.014-.004l-.052-.017a21 21 0 0 0-.782-.24a13 13 0 0 0-.722-.186A3.6 3.6 0 0 0 12 6c-.187 0-.377.04-.501.07c-.147.034-.31.08-.473.13a24 24 0 0 0-1.055.36a50 50 0 0 0-1.23.467l-.082.032zM7.183 12.77l.031.029l.091.084a100 100 0 0 0 1.374 1.252c.394.352.801.708 1.145.992q.26.216.442.352q.12.088.16.113l2.836 1.063a1 1 0 0 0 .991-.168l2.107-1.755a1 1 0 1 1 1.28 1.536l-2.106 1.756a3 3 0 0 1-2.974.504l-2.96-1.11l-.047-.024c-.281-.14-.672-.45-1.004-.726a44 44 0 0 1-1.202-1.04a96 96 0 0 1-1.403-1.28l-.094-.087l-.033-.03a1 1 0 0 1 1.366-1.461m-.748 5.089a1 1 0 0 1 1.409-.126l.958.8a1 1 0 0 0 .502.223l1.237.173a1 1 0 1 1-.278 1.981l-1.236-.173a3 3 0 0 1-1.507-.669l-.958-.8a1 1 0 0 1-.127-1.41" clip-rule="evenodd"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopHandshakeCircleFilled0)"/></g></svg>

                        <nuxt-link to="#" @click="hideDropdown"> Deals by Region</nuxt-link>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopHandshakeCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M22.39 12.617a1 1 0 0 0 .457-1.338L20.21 5.89a1 1 0 0 0-1.338-.458l-1.796.88a1 1 0 0 0-.458 1.337l2.638 5.389a1 1 0 0 0 1.338.458zm-3.867-5.623a.75.75 0 1 0 .66 1.347a.75.75 0 0 0-.66-1.347M7.026 5.668a1 1 0 0 0-1.33.48L3.147 11.58a1 1 0 0 0 .48 1.33l1.811.85a1 1 0 0 0 1.33-.48l2.55-5.432a1 1 0 0 0-.481-1.33zm-1.962 6.536a.75.75 0 1 0 .637-1.358a.75.75 0 0 0-.637 1.358" clip-rule="evenodd"/><path d="m17.113 8.494l.014-.002h.003a1 1 0 0 0 .717-.46l.145-.662a1 1 0 0 0-1.123-.861h-.006l-.02.003l-.067.01l-.246.035c-.209.032-.5.08-.835.14c-.661.122-1.531.307-2.272.554c-.425.142-.847.403-1.218.675c-.383.28-.772.615-1.138.955a29 29 0 0 0-1.853 1.92c-.557.63-.715 1.679-.017 2.436c.346.376.92.888 1.691 1.12c.828.25 1.766.14 2.682-.535l.721-.466q.119.09.27.218c.25.21.525.459.784.703a34 34 0 0 1 .867.847l.054.055l.013.014l.004.004l.118.122l.152.075c.58.29 1.183.17 1.573.04c.417-.141.814-.371 1.134-.583a9.4 9.4 0 0 0 1.137-.898l.02-.019l.007-.006l.002-.002h.001a1 1 0 0 0-1.376-1.452l-.001.001l-.011.01l-.05.046a8 8 0 0 1-.837.654a3 3 0 0 1-.666.354l-.023.007l-.043-.042a36 36 0 0 0-.633-.616l-.07-.067a21 21 0 0 0-.871-.78c-.277-.232-.593-.478-.876-.633c-.633-.347-1.23-.076-1.499.097l-1.043.674l-.028.021c-.431.323-.723.306-.935.242c-.226-.068-.454-.225-.66-.42a26 26 0 0 1 1.624-1.677c.332-.309.659-.587.956-.805c.31-.226.536-.347.67-.391c.608-.203 1.369-.368 2-.484a26 26 0 0 1 1-.163z"/><path fill-rule="evenodd" d="M8.629 7.072a1 1 0 0 0 .742 1.856l.026-.01l.078-.03a49 49 0 0 1 1.18-.448c.337-.123.678-.241.96-.328a6 6 0 0 1 .407-.11l.055.008q.091.014.23.044c.183.041.397.098.606.158a21 21 0 0 1 .712.217l.045.015l.01.004h.003a1 1 0 0 0 .633-1.897l-.309.928l.31-.928l-.007-.002l-.014-.004l-.052-.017a21 21 0 0 0-.782-.24a13 13 0 0 0-.722-.186A3.6 3.6 0 0 0 12 6c-.187 0-.377.04-.501.07c-.147.034-.31.08-.473.13a24 24 0 0 0-1.055.36a50 50 0 0 0-1.23.467l-.082.032zM7.183 12.77l.031.029l.091.084a100 100 0 0 0 1.374 1.252c.394.352.801.708 1.145.992q.26.216.442.352q.12.088.16.113l2.836 1.063a1 1 0 0 0 .991-.168l2.107-1.755a1 1 0 1 1 1.28 1.536l-2.106 1.756a3 3 0 0 1-2.974.504l-2.96-1.11l-.047-.024c-.281-.14-.672-.45-1.004-.726a44 44 0 0 1-1.202-1.04a96 96 0 0 1-1.403-1.28l-.094-.087l-.033-.03a1 1 0 0 1 1.366-1.461m-.748 5.089a1 1 0 0 1 1.409-.126l.958.8a1 1 0 0 0 .502.223l1.237.173a1 1 0 1 1-.278 1.981l-1.236-.173a3 3 0 0 1-1.507-.669l-.958-.8a1 1 0 0 1-.127-1.41" clip-rule="evenodd"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopHandshakeCircleFilled0)"/></g></svg>

                        <nuxt-link to="#" @click="hideDropdown"> Deals by Price</nuxt-link>
                      </li>
                    </ul>
                    <ul class="pt-4">
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16 7A5 5 0 1 1 6 7a5 5 0 0 1 10 0m-5 6c2.396 0 4.575.694 6.178 1.672c.8.488 1.484 1.064 1.978 1.69c.486.615.844 1.351.844 2.138c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m10 0a1 1 0 0 1 .117 1.993L21 15h-1a1 1 0 0 1-.117-1.993L20 13zm-3-2a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m0-4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"/></g></svg>
                        <NuxtLink to="/contact-us" @click="hideDropdown"> Contact Us</NuxtLink>
                      </li>
                      <li class="flex items-center space-x-2 hover:text-sky-500 hover:bg-gray-300 hover:rounded-lg py-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 32 32"><path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5"/><path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-6 h-6 "> <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
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
                <button @mouseenter="show=true" @mouseleave="handleMouseLeave" class="hover:text-sky-500 hover:cursor-pointer flex items-center">
                    <nuxt-link to="">Flights</nuxt-link>
                    <span class="inline-block ml-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
                <ul v-show="show" class="absolute slide-fade top-0 left-0 right-0 mt-12 px-6 pt-4 pb-8 w-56 -ml-6 space-y-2 bg-gray-50 rounded-lg shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] text-gray-700 font-medium text-lg "
                  @mouseenter="show = true"
                  @mouseleave="handleMouseLeave">
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
            <button @mouseenter="show2=true" @mouseleave="handleMouseLeave2" class="hover:text-sky-500 hover:cursor-pointer flex items-center">
              <nuxt-link to="">Deals</nuxt-link>
              <span class="inline-block ml-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                             stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
            </button>
            <div v-show="show2" class="absolute slide-fade grid grid-cols-4 gap-2 xl:px-6 px-2 pt-4 pb-8 top-0 left-0 right-0 mt-12 xl:-ml-80 -ml-[450px] min-w-[700px] bg-gray-50 rounded-lg shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] text-gray-700 font-normal "
                @mouseenter="show2 = true"
                @mouseleave="handleMouseLeave2">
              <ul class="flex flex-col space-y-2">
                <li class="font-bold text-lg ">Top Deals</li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Gift Cards</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Flight Deals</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Group Travels</nuxt-link></li>
              </ul>
              <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
              <ul class="flex flex-col space-y-2">
                <li class="font-bold text-lg ">Travel by Interest</li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Military Travel</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Senior Travel</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Student Travel</nuxt-link></li>              </ul>
              <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
              <ul class="flex flex-col space-y-2">
                <li class="font-bold text-lg ">Travel by Region</li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Military Travel</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Senior Travel</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Student Travel</nuxt-link></li>              </ul>
              <!-- <hr class="h-px my-1 mb-4 bg-gray-300 border-0"> -->
              <ul class="flex flex-col space-y-2">
                <li class="font-bold text-lg ">Travel by Price</li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Military Travel</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Senior Travel</nuxt-link></li>
                <li><nuxt-link to="/flights-by-cities" @click="hideDropdown">Student Travel</nuxt-link></li>              </ul>

            </div>
          </li>

          <li class=" hover:text-sky-500 hover:cursor-pointer">
                <NuxtLink to="/contact-us" >Contact</NuxtLink>
          </li>

          <li class=" hover:text-sky-500 hover:cursor-pointer">
                <NuxtLink to="/about-us" >About</NuxtLink>
          </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

let show = ref(false);
let show2 = ref(false);
let menu = ref(false);
const dropdownRef = ref(null);
const dropdownRef2 = ref(null);

const hideDropdown = () => {
  show.value = false;
  show2.value = false;
  menu.value = false;
};

// Handle mouse leave for both Flights menu and dropdown
const handleMouseLeave = () => {
  setTimeout(() => {
    if (!dropdownRef.value.contains(document.querySelector(':hover'))) {
      show.value = false;
    }
  }, 100);
};
const handleMouseLeave2 = () => {
  setTimeout(() => {
    if (!dropdownRef2.value.contains(document.querySelector(':hover'))) {
      show2.value = false;
    }
  }, 100);
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