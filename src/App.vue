<script setup>
import NavBar from '../src/components/NavBar.vue'
</script>

<template>
  <div class="bg-[#171717] dark:bg-[#171717] min-h-screen flex flex-col items-center py-5 font-Poppins">
    <NavBar />
    <router-view />
  </div>
</template>

<style scoped>

</style>
