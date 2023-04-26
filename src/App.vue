
<template>
  <div class="bg-quaternary">
    <NavigationComponent class="sticky z-50 top-0" />
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import NavigationComponent from './components/NavigationComponent.vue';

</script>
<style></style>

