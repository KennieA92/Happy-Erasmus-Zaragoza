<template>
    <div class="w-full flex justify-center">
        <div class="w-10/12 h-[70vh] bg-primary flex items-center rounded-t-3xl rounded-l-3xl rounded-s-3xl relative">
            <div class="h-full w-full lg:w-10/12 2xl:w-9/12 flex justify-center items-center">
                <h1
                    class="px-8 text-start text-5xl/snug md:text-5xl/snug lg:text-6xl/snug 2xl:text-7xl/snug font-sourcecodepro text-text-secondary">
                    We've developed this
                    <span class="font-thin">photo gallery </span> to <span class="font-bold">share,
                        discover &amp; collect </span>
                    your favourite memories
                    in <span class="font-bold">one</span> place.
                </h1>

            </div>
            <router-link to="/"><img class="absolute right-20 w-10 bottom-4 animate-bounce"
                    src="../assets/landing/arrow.svg" alt=""></router-link>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>