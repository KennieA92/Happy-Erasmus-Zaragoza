<template>
    <div class="w-full flex justify-center items-center h-40 bg-quaternary"
        :class="{ ['h-[100vh] animate-slow-fade']: isOpen }">
        <nav class="w-10/12 h-full flex md:flex-row md:justify-between items-center font-sourcecodepro relative"
            :class="[isOpen ? 'flex-col justify-center' : 'flex-row']">
            <router-link class="font-bold text-secondary" to="/" :class="{ ['mb-10 text-2xl']: isOpen }">HAPPY
                <br> ERASMUS
                <br>
                ZARAGOZA</router-link>
            <div class="justify-between w-full md:w-9/12 items-center text-center md:flex"
                :class="[isOpen ? 'flex flex-wrap' : 'hidden']">
                <router-link class="p-4 w-full md:w-2/12 " to="/about" @click="isOpen = false">About</router-link>
                <router-link class="p-4 w-full md:w-2/12 " to="/about" @click="isOpen = false">Trips</router-link>
                <router-link class="p-4 w-full md:w-2/12 " to="/about" @click="isOpen = false">Contact</router-link>
                <select
                    class="appearance-none border-none bg-none bg-quaternary p-4 md:p-0 w-full md:w-2/12 text-center focus:ring-0 "
                    id="languages" name="languages">
                    <option value="en">English</option>
                    <option value="zh">Chinese - 中文</option>
                    <option value="es">Spanish - español</option>
                    <option value="hi">Hindi - हिन्दी</option>
                    <option value="ar">Arabic - العربية</option>
                    <option value="pt">Portuguese - português</option>
                    <option value="bn">Bengali - বাংলা</option>
                    <option value="ru">Russian - русский</option>
                    <option value="ja">Japanese - 日本語</option>
                    <option value="pa">Punjabi - ਪੰਜਾਬੀ</option>
                </select>
                <router-link to="/" class="w-full md:w-2/12 py-2 border-solid border-black border-[1px] rounded-3xl"
                    v-if="isLoggedIn" @click="logout(); isOpen = false">Log
                    out</router-link>
            </div>
            <div class="w-full flex md:hidden justify-end z-50 absolute top-[68px]">
                <button id="menu-btn"
                    class="md:hidden focus:outline-none bg-none border-none cursor-pointer w-6 h-6 relative"
                    @click=" openBurgerMenu() ">
                    <span id="hamburger-top" class="w-6 h-[2px] bg-accent absolute top-[7px] left-0"
                        :class=" { ['animate-burgerTop']: isOpen } "></span>
                    <span id="hamburger-middle" class="w-6 h-[2px] bg-accent absolute top-[14px] left-0"
                        :class=" { ['hidden']: isOpen } "></span>
                    <span id="hamburger-bottom" class="w-6 h-[2px] bg-accent absolute top-[21px] left-0"
                        :class=" { ['animate-burgerBottom']: isOpen } "></span>
                </button>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useUsers from '../modules/useUsers';
const { isLoggedIn, isUserLoggedIn, logout } = useUsers();

const isOpen = ref(false);
const openBurgerMenu = () => {
    isOpen.value = !isOpen.value;
}

onMounted(() => {
    isUserLoggedIn();

});





</script>

<style scoped></style>