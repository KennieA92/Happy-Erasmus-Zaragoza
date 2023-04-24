<template>
    <div class="h-full w-full flex justify-center items-center flex-col">
        <h1 class="text-white text-xl mb-3">Login below.</h1>
        <form @submit.prevent="login" class="flex w-full md:w-6/12 flex-col justify-center items-center gap-2">
            <input class="w-10/12 md:w-full text-black border-none bg-secondary rounded-xl focus:ring-0 ring-secondary "
                type="text" placeholder="Email" v-model="email" />
            <input class="w-10/12 md:w-full text-black border-none bg-secondary rounded-xl focus:ring-0 ring-secondary "
                type="password" placeholder="Password" v-model="password" />
            <input type="submit" value="LOG IN"
                class="w-40 py-1 bg-primary rounded-xl font-semibold text-xl text-black border-black border-[1px] border-solid" />
            <p class="text-lg">Don't have an account? <a class="text-secondary cursor-pointer"
                    @click="$emit('register')">Register
                    here!</a>
            </p>
        </form>
    </div>
</template>

<script setup lang="ts">

import useUsers from "../modules/useUsers";
const { login, email, password } = useUsers();

</script>

<style lang="scss" scoped></style>