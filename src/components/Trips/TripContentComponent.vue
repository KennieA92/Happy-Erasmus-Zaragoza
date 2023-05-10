<template>
    <section id="trip-content-section" class="h-full w-full flex justify-center">
        <div class="w-11/12 bg-secondary h-full rounded-r-3xl rounded-bl-3xl flex justify-center items-center relative">
            <div class="w-11/12 h-5/6 flex justify-center items-center gap-10" v-if="trip">
                <div class="w-1/2 h-full flex flex-wrap justify-center">
                    <div class="w-10/12 h-1/6 flex flex-wrap gap-2">
                        <h1 class="text-6xl text-primary "> {{ trip.title }}

                        </h1>
                        <p class="w-full"> {{ trip.titleDescription }}</p>
                    </div>
                    <img :src="trip.tripImage" alt="" class="w-full h-5/6">

                </div>
                <div class="w-1/2 h-full flex items-end">
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
            <img class="w-14 h-4 top-[50%] left-0 absolute cursor-pointer rotate-180" @click="changeIndex(-1)"
                src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsBefore">
            <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer" @click="changeIndex(1)"
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
const tripIndex = ref(0);

const changeIndex = (index: number) => {
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