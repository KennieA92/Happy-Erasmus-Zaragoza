<template>
    <section id="entry" class="py-8 w-full min-h-[85vh] flex justify-center">
        <div
            class="flex flex-col md:flex-row items-center justify-center h-full w-10/12 bg-gradient-to-b md:bg-gradient-to-r from-secondary from-80% to-80% to-primary rounded-r-3xl rounded-b-3xl">
            <div class="w-10/12 md:w-7/12 flex flex-col items-center justify-center">
                <div class="w-full md:w-10/12">
                    <div class="flex items-center py-4"><img class="w-14 h-[2px] object-cover"
                            src="../assets/entry/line.svg" alt="">
                        About us.
                    </div>
                    <div class="w-full md:w-1/2 py-4">
                        <h1 class="text-2xl md:text-4xl text-primary font-sourcecodepro font-bold">
                            SIGN UP <span class="md:hidden">BELOW </span> TO AVOID MISSING OUT
                        </h1>
                    </div>
                    <div class="w-full md:w-3/5 ">
                        <p class="text-white opacity-50">
                            Happy Erasmus Zaragoza is a student Association focused on helping new Erasmus students to feel
                            comfortable in Zaragoza. We organize different activities, such as trips, parties, courses and
                            travels.
                        </p>
                    </div>
                </div>
                <div
                    class="w-11/12 py-8 mt-8 bg-white bg-opacity-40 rounded-3xl flex flex-col md:flex-row items-center justify-around text-white">
                    <div class="w-10/12 md:w-3/12 py-4 md:py-0">
                        <h2 class="text-center md:text-start text-2xl">Trips</h2>
                        <p class="pb-2 border-b-[1px] md:pb-0 md:border-b-0"> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. </p>
                    </div>
                    <div class="w-10/12 md:w-3/12 py-4 md:py-0">
                        <h2 class="text-center md:text-start text-2xl">Trips</h2>
                        <p class="pb-2 border-b-[1px] md:pb-0 md:border-b-0"> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. </p>
                    </div>
                    <div class="w-10/12 md:w-3/12 py-4 md:py-0">
                        <h2 class="text-center md:text-start text-2xl">Trips</h2>
                        <p class="pb-2 border-b-[1px] md:pb-0 md:border-b-0"> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. </p>
                    </div>
                </div>
            </div>
            <div class="w-5/12 h-full flex justify-center items-center">
                <RegisterComponent v-if="isRegister" />
                <LoginComponent v-else @register="isRegister = true" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import useUsers from '../modules/useUsers';
const isLoading = ref(true);
const { isUserLoggedIn } = useUsers();

const isRegister = ref(false);
onMounted(() => {
    isUserLoggedIn().then(() => {
        setTimeout(() => {
            isLoading.value = false;

        }, 3000);
    });



});
</script>


<style scoped></style>