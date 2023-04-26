<template>
    <div class="w-full flex justify-center items-center h-40 ">
        <nav class="w-10/12 flex justify-between items-center">
            <router-link to="/">Happy Erasmus Zaragoza</router-link>
            <div class="flex justify-between w-8/12 items-center text-center">
                <router-link class="w-2/12" to="/about">About</router-link>
                <router-link class="w-2/12" to="/about">Trips</router-link>
                <router-link class="w-2/12" to="/about">Contact</router-link>
                <select class="appearance-none border-none p-0 bg-none bg-quaternary w-2/12 text-center focus:ring-0 "
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
                <router-link to="/" class="w-2/12 py-2 border-solid border-black border-[1px] rounded-3xl" v-if="isLoggedIn"
                    @click="logout">Log
                    out</router-link>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useUsers from '../modules/useUsers';
const { isLoggedIn, isUserLoggedIn, logout } = useUsers();

onMounted(() => {
    isUserLoggedIn();
});





</script>

<style scoped>
.form-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>