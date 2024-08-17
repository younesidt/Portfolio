<template>
  <div 
    class="w-[90%] md:w-3/5 xl:w-2/5 bg-[#1E1E1E] bg-opacity-100 shadow-lg backdrop-filter backdrop-blur-xl rounded-md" 
  >
    <div class="w-full flex text-[#FFFFFF] text-[10px] md:text-sm font-Poppins font-normal">
      <router-link 
        to="/" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 rounded-l-md hover:bg-[#232323]"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]"
        >
          <span>Home</span>
      </router-link>
      <router-link 
        to="/Projects" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 hover:bg-[#232323]"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]"
        >
          <span>Projects</span>
      </router-link>
      <router-link 
        to="/Skills-software" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 hover:bg-[#232323]"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]"
        >
          <span>Skills & Software</span>
      </router-link>
      <router-link 
        to="/About" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 hover:bg-[#232323] rounded-r-md"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]" 
        >
          <span>About</span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
// const navb = ref(false)
console.log(route);

</script>
<style scoped>
</style>
