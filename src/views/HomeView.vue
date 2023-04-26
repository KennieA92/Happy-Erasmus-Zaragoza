<template>
    <div class="w-full min-h-screen flex flex-wrap justify-center ">
        <LandingComponent />
        <ScrollingTextComponent />
        <EntryComponent />
    </div>
</template>

<script setup lang="ts">
import LandingComponent from '../components/LandingComponent.vue';
import ScrollingTextComponent from '../components/ScrollingTextComponent.vue';
import EntryComponent from '../components/EntryComponent.vue';

</script>

<style lang="scss" scoped></style>