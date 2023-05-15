<template>
    <section class="w-full h-[70vh] flex flex-wrap md:flex-nowrap md:overflow-y-hidden overflow-y-scroll"><!-- 
        <section id="trip-gallery-navigation"
            class="h-fit w-full md:h-full md:w-3/12 bg-secondary md:rounded-r-3xl flex-col md:flex-row justify-center items-center relative flex"
            :class="[isNavOpen ? 'md:animate-tripNavOpen' : 'md:animate-tripNavClose']">
            <div class="w-full flex flex-col justify-center items-center overflow-y-scroll no-scrollbar text-white">
                <h1 @click="updateIndex(index)" v-for="(trip, index) in trips"
                    class="text-center text-2xl hover:font-bold hover:text-primary cursor-pointer"
                    :class="[changeIndex === index ? 'text-primary font-bold' : '']">{{ trip.title }}
                </h1>
            </div>
            <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer hidden md:block"
                :class="{ ['rotate-180']: isNavOpen }" @click="isNavOpen = !isNavOpen" src="../assets/trips/arrow.svg">
        </section> -->
        <section id="trip-gallery-navigation"
            class="h-50 md:h-full w-full md:w-3/12 md:bg-primary md:rounded-r-3xl flex flex-col justify-center items-center relative border-t-2 border-b-2 border-secondary md:border-0"
            :class="[isNavOpen ? 'md:animate-tripNavOpen' : 'md:animate-tripNavClose']">
            <div
                class="w-full flex md:flex-col md:justify-center items-center overflow-x-auto md:overflow-x-hidden md:green-scrollbar no-scrollbar text-white gap-1">
                <div class="flex flex-wrap justify-center items-center h-full w-full rounded-3xl py-2 md:my-0"
                    @click="updateIndex(index)" v-for="(trip, index) in trips">
                    <img class="w-16 h-16 object-fill rounded-3xl md:hidden" :src="trip.tripImage" alt="">
                    <h1 class="w-24 md:w-full text-center text-black md:text-white text-sm md:text-2xl hover:font-bold hover:text-secondary cursor-pointer whitespace-nowrap"
                        :class="[changeIndex === index ? 'text-secondary font-bold' : '']">{{ trip.title }}
                    </h1>
                </div>


            </div>
            <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer hidden md:block"
                :class="{ ['rotate-180']: isNavOpen }" @click="isNavOpen = !isNavOpen" src="../assets/trips/arrow.svg">
        </section>

        <section class="h-full w-full flex justify-center relative">
            <div class="w-11/12 h-full rounded-r-3xl rounded-bl-3xl flex flex-col-reverse md:flex-row flex-wrap justify-around md:justify-center content-around
                 ">
                <div class="w-10/12 h-1/12 flex justify-center"><label for="fileUploader"
                        class="w-32 h-12 bg-accent flex justify-center items-center text-white gap-2 rounded-full relative"><input
                            id="fileUploader" class="opacity-0 absolute w-full h-full rounded-full" @change="uploadFile"
                            type="file" multiple />
                        <img src="../assets/trips/plus.svg">
                        Upload</label>
                </div>
                <div
                    class="w-10/12 md:w-full h-5/6 overflow-y-scroll bg-white bg-opacity-50 rounded-3xl scrollbar flex flex-wrap content-between justify-between gap-2">
                    <img class="md:h-1/3 object-contain rounded-3xl" :src="tripImg.imageUrl" alt=""
                        v-for="tripImg in tripImages">

                </div>

            </div>

            <div class="absolute flex justify-center w-full animate-slow-fade" v-if="snackbar.show">
                <div class="w-full h-full py-2 text-center bg-red-500 rounded-bl-3xl text-white text-xl">
                    <h1>{{ snackbar.text }}</h1>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useTrips from '../modules/useTrips';
import useTripGallery from '../modules/useTripGallery';
const { trip, trips, getTripsData } = useTrips();
const { tripImage, tripImages, getTripImagesData, uploadFile, snackbar } = useTripGallery();
const route = useRoute();
const isNavOpen = ref(false);
const index = parseInt((route.params.tripIndex as string) ?? "0");
const changeIndex = ref(index);


onMounted(() => {


    getTripsData();
    setTimeout(() => {
        trip.value = trips.value[index];
        tripImage.value.tripId = trip.value.id;
        getTripImagesData(trip.value.id);
    }, 1000);
})

const updateIndex = (index: number) => {
    changeIndex.value = index;
    trip.value = trips.value[index];
    tripImage.value.tripId = trip.value.id;
    getTripImagesData(trip.value.id);
}

</script>

<style scoped></style>