<template>
    <div class="w-full min-h-screen flex flex-wrap justify-center ">
        <LandingComponent />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingComponent from '../components/LandingComponent.vue';
/* import useUsers from '../modules/useUsers';
const isLoading = ref(true);
onMounted(() => {
    isUserLoggedIn().then(() => {
        setTimeout(() => {
            isLoading.value = false;

        }, 3000);
    });



}); */

const isRegister = ref(false);
</script>

<style lang="scss" scoped></style>