<template>
    <div class="w-screen h-full flex flex-wrap justify-center content-center bg-background bg-no-repeat bg-cover">
        <div v-if="isLoading" class="w-screen h-screen flex flex-wrap justify-center content-center">
            <div class="w-8 h-8 rounded-md bg-primary motion-safe:animate-spin-slow"></div>
            <div class="w-8 h-8 rounded-md bg-secondary motion-safe:animate-spin-slow"></div>
            <div class="w-8 h-8 rounded-md bg-primary motion-safe:animate-spin-slow"></div>
            <div class="w-8 h-8 rounded-md bg-secondary  motion-safe:animate-spin-slow"></div>
        </div>
        <div v-else class="w-full flex overflow-hidden flex-wrap flex-col md:flex-row">
            <div class="w-full md:w-1/2 h-screen flex justify-center">
                <div v-if="isLoggedIn" class="w-6/12 h-full animate-slide-in text-5xl py-3">
                    <p>Happy</p>
                    <p>Erasmus</p>
                    <p>Zaragoza</p>
                </div>
                <div class="w-full xl:w-9/12" v-else>
                    <loginComponent @register="isRegister = true" v-if="!isRegister" class="animate-slide-in" />
                    <registerComponent @register="isRegister = false" v-else class="animate-slide-in" />
                </div>
            </div>
            <div class="w-full md:w-1/2 h-screen flex justify-center">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import loginComponent from '../components/LoginComponent.vue';
import registerComponent from '../components/RegisterComponent.vue';
import useUsers from '../modules/useUsers';
const { isLoggedIn, logout, isUserLoggedIn } = useUsers();
const isLoading = ref(true);
onMounted(() => {
    isUserLoggedIn().then(() => {
        setTimeout(() => {
            isLoading.value = false;

        }, 3000);
    });

});

const isRegister = ref(false);
</script>

<style lang="scss" scoped></style>