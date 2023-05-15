<template>
    <section id="trip-content-section" class="h-screen md:h-full w-full flex justify-center">
        <div
            class="w-full md:w-11/12 bg-secondary h-full md:rounded-r-3xl md:rounded-bl-3xl flex  justify-center items-center relative overflow-x-hidden">
            <div class="w-11/12 h-max md:h-5/6 flex flex-col md:flex-row justify-center items-center gap-10 "
                :class="[slideRight ? 'animate-slideRight' : 'animate-slideLeft']" v-for="(trip, index) in trips"
                v-show="index === tripIndex">
                <div class="w-full md:w-1/2 h-full flex flex-wrap justify-center content-around gap-4">
                    <div class="w-full md:w-10/12 h-1/6 flex flex-wrap gap-4 md:gap-2">
                        <h1 class="w-full text-6xl text-primary text-center md:text-start"> {{ trip.title }}

                        </h1>
                        <p class="w-full"> {{ trip.titleDescription }}</p>
                    </div>
                    <img :src="trip.tripImage" alt="" class="w-full h-4/5">

                </div>
                <div class="w-full md:w-1/2 h-full flex items-end">
                    <div class="h-5/6 w-full flex flex-wrap content-around">
                        <h2 class="text-2xl h-1/12"> {{ trip.location }}</h2>
                        <p class="w-full h-1/12 text-white">{{ trip.startDate }}</p>
                        <p class="w-full h-4/6 text-white"> {{ trip.description }}</p>

                        <div class="w-1/3 rounded-full border-solid border-black border-[1px]">
                            <div
                                class="w-14 h-full bg-primary rounded-full border-solid border-black border-[1px] flex justify-center items-center">
                                <router-link :to="{ name: 'TripGallery', params: { id: trip.id, tripIndex } }"
                                    class="p-4 h-full"><img src="../../assets/trips/galleryicon.svg" alt=""></router-link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <img class="w-4 h-full md:h-4 md:top-[50%] left-0 absolute cursor-pointer rotate-180" @click="changeIndex(-1)"
                src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsBefore">
            <img class="w-4 h-full md:h-4 md:top-[50%] right-0 absolute cursor-pointer" @click="changeIndex(1)"
                src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsAfter">
        </div>
    </section>
</template>

<script setup lang="ts">

import { toRef, onMounted, ref, computed } from 'vue';
const props = defineProps(["trips"]);
const emit = defineEmits(['changeIndex']);
const trips = toRef(props, "trips");
const trip = ref('');
const slideRight = ref(false);
const tripIndex = ref(0);

const changeIndex = (index: number) => {
    if (index > 0) slideRight.value = true;
    else slideRight.value = false;
    tripIndex.value += index;
    emit('changeIndex', tripIndex.value);
    trip.value = trips.value[tripIndex.value];
}
const changeToIndex = (index: number) => {
    tripIndex.value = index;
    trip.value = trips.value[tripIndex.value];
}

defineExpose({
    changeToIndex
});

const isMoreTripsBefore = computed(() => {
    return (tripIndex.value) > 0 ? true : false
})
const isMoreTripsAfter = computed(() => {
    return trips.value.length > (tripIndex.value + 1) ? true : false
})


onMounted(() => {
    setTimeout(() => {
        trip.value = trips.value[tripIndex.value];
    }, 1000);
})


</script>

<style scoped></style>