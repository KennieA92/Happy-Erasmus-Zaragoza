<template>
    <div
        class="min-h-[70vh] md:min-h-[50vh] md:h-10/12 w-full md:w-11/12 flex justify-center items-center flex-col bg-tertiary rounded-3xl font-nunito">
        <div class="w-10/12">
            <h1 class="text-2xl text-text-color py-2">CREATE AN ACCOUNT</h1>
            <p class="text-xs text-black">ALREADY GOT AN ACCOUNT? <a class="text-secondary cursor-pointer"
                    @click="$emit('register')">LOGIN
                    HERE!</a>
            </p>
        </div>
        <form @submit.prevent="registerUser"
            class="flex w-full text-black  md:w-10/12 flex-col justify-center items-center py-2 gap-2">
            <input class="w-10/12 md:w-full  border-[#DCDBDD]  bg-white rounded-xl focus:ring-0 ring-secondary " type="text"
                placeholder="EMAIL" v-model="email" />
            <div class="w-10/12 md:w-full grid gap-2 grid-cols-2 ">
                <input class="border-[#DCDBDD]  bg-white rounded-xl focus:ring-0 ring-secondary " type="text"
                    placeholder="NAME" v-model="name" />

                <input class="border-[#DCDBDD] bg-white rounded-xl focus:ring-0 ring-secondary " type="text"
                    placeholder="SURNAME" v-model="surname" />
            </div>

            <input class="w-10/12 md:w-full border-[#DCDBDD]  bg-white rounded-xl focus:ring-0 ring-secondary "
                type="password" placeholder="PASSWORD" v-model="password" />
            <input type="submit" value="SIGN UP"
                class="w-10/12 md:w-full py-1 bg-accent rounded-xl font-semibold text-white text-xl border-black border-[1px] border-solid" />
            <label class="w-10/12  md:w-full text-xs"><input type="checkbox" class="bg-none text-primary "> By clicking
                Create
                account, I
                agree that I
                have
                read and
                accepted the <router-link to="/" class="text-secondary">Terms of Use and Privacy
                    Policy.</router-link></label>
        </form>
        <div class="w-10/12">
            <img class="w-full my-4" src="../../assets/entry/longline.svg" alt="">
            <p class="text-xs">Protected by reCAPTCHA and subject to the <a class="text-secondary" href="#">Cuboid Privacy
                    Policy and Terms of
                    Service.</a></p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import useUsers from "../../modules/useUsers";
const { registerUser, name, surname, email, password } = useUsers();
</script>