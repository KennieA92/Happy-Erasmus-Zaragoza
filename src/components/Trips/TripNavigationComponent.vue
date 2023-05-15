<template>
    <section id="trip-navigation"
        class="h-50 md:h-full w-full md:w-3/12 md:bg-primary md:rounded-r-3xl flex flex-col justify-center items-center relative border-t-2 border-b-2 border-secondary md:border-0"
        :class="[isNavOpen ? 'md:animate-tripNavOpen' : 'md:animate-tripNavClose']">
        <div
            class="w-full flex md:flex-col md:justify-center items-center overflow-x-auto md:overflow-x-hidden md:green-scrollbar no-scrollbar text-white gap-1">
            <div class="flex flex-wrap justify-center items-center h-full w-full rounded-3xl py-2 md:my-0"
                @click="$emit('indexChanged', index)" v-for="(trip, index) in trips">
                <img class="w-16 h-16 object-fill rounded-3xl md:hidden" :src="trip.tripImage" alt="">
                <h1 class="w-24 md:w-full text-center text-black md:text-white  text-sm md:text-2xl hover:font-bold hover:text-secondary cursor-pointer whitespace-nowrap"
                    :class="[changeIndex === index ? 'text-secondary font-bold' : '']">{{ trip.title }}
                </h1>
            </div>


        </div>
        <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer hidden md:block"
            :class="{ ['rotate-180']: isNavOpen }" @click="isNavOpen = !isNavOpen" src="../../assets/trips/arrow.svg">
    </section>
</template>

<script setup lang="ts">


import { ref, toRef } from 'vue';
const isNavOpen = ref(false);
const props = defineProps(["trips", "changeIndex"]);
const trips = toRef(props, "trips");
const changeIndex = toRef(props, "changeIndex");




</script>

<style scoped></style>