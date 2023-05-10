<template>
    <section id="trip-navigation"
        class="h-full w-3/12 bg-primary rounded-r-3xl flex flex-col justify-center items-center relative"
        :class="[isNavOpen ? 'animate-tripNavOpen' : 'animate-tripNavClose']">
        <div class="w-full flex flex-col justify-center items-center overflow-y-scroll no-scrollbar text-white">
            <h1 @click="$emit('indexChanged', index)" v-for="(trip, index) in trips"
                class="text-center text-2xl hover:font-bold hover:text-secondary cursor-pointer"
                :class="[changeIndex === index ? 'text-secondary font-bold' : '']">{{ trip.title }}
            </h1>
        </div>
        <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer" :class="{ ['rotate-180']: isNavOpen }"
            @click="isNavOpen = !isNavOpen" src="../../assets/trips/arrow.svg">
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