<template>
    <section class="w-full h-[70vh] ">
        <section id="trip-gallery-navigation"
            class="h-full w-3/12 bg-secondary rounded-r-3xl flex flex-col justify-center items-center relative"
            :class="[isNavOpen ? 'animate-tripNavOpen' : 'animate-tripNavClose']">
            <div class="w-full flex flex-col justify-center items-center overflow-y-scroll no-scrollbar text-white">
                <h1 @click="updateIndex(index)" v-for="(trip, index) in trips"
                    class="text-center text-2xl hover:font-bold hover:text-primary cursor-pointer"
                    :class="[changeIndex === index ? 'text-primary font-bold' : '']">{{ trip.title }}
                </h1>
            </div>
            <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer" :class="{ ['rotate-180']: isNavOpen }"
                @click="isNavOpen = !isNavOpen" src="../assets/trips/arrow.svg">
        </section>

    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useTrips from '../modules/useTrips';
const { trip, uploadFile, trips, getTripsData, addTrip } = useTrips();
const route = useRoute();
const isNavOpen = ref(false);
const index = parseInt((route.params.tripIndex as string) ?? "0");
const changeIndex = ref(index);

onMounted(() => {
    getTripsData();
})

const updateIndex = (index: number) => {
    changeIndex.value = index;
}

console.log(route.params.id)
</script>

<style scoped></style>