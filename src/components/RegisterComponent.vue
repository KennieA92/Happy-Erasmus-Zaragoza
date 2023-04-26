<template>
    <div class="h-full w-10/12 flex justify-center items-center flex-col bg-white">
        <h1 class="text-2xl text-text-color py-2">Register new user</h1>
        <form @submit.prevent="registerUser" class="flex w-full md:w-6/12 flex-col justify-center items-center gap-2">
            <div class="w-10/12 md:w-full grid gap-2 grid-cols-2 text-black">
                <input class=" border-none bg-secondary rounded-xl focus:ring-0 ring-secondary " type="text"
                    placeholder="NAME" v-model="name" />

                <input class="border-none bg-secondary rounded-xl focus:ring-0 ring-secondary " type="text"
                    placeholder="SURNAME" v-model="surname" />
            </div>
            <input class="w-10/12 md:w-full  text-black border-none bg-secondary rounded-xl focus:ring-0 ring-secondary "
                type="text" placeholder="EMAIL" v-model="email" />
            <input class="w-10/12 md:w-full  text-black border-none bg-secondary rounded-xl focus:ring-0 ring-secondary "
                type="password" placeholder="PASSWORD" v-model="password" />
            <input type="submit" value="LOG IN"
                class="w-40 py-1 bg-primary rounded-xl font-semibold text-xl text-black border-black border-[1px] border-solid" />
            <p class="text-lg">Already have an account? <span class="text-secondary cursor-pointer"
                    @click="$emit('register')">Login
                    here!</span>
            </p>
        </form>
    </div>
</template>
  
<script setup lang="ts">
import useUsers from "../modules/useUsers";
const { registerUser, name, surname, email, password } = useUsers();
</script>