<template>
  <!--Desktop navbar-->
  <div 
    ref="content"
    class="hidden md:block w-[90%] md:w-3/5 xl:w-2/5 2xl:w-1/4 bg-[#1E1E1E] bg-opacity-100 shadow-lg backdrop-filter backdrop-blur-xl rounded-full" 
  >
    <div class="w-full flex text-[#FFFFFF] text-[10px] md:text-sm font-Poppins font-normal">
      <router-link 
        to="/" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 rounded-full hover:bg-[#232323]"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]"
        >
          <span>Home</span>
      </router-link>
      <router-link 
        to="/Projects" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 rounded-full hover:bg-[#232323]"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]"
        >
          <span>Projects</span>
      </router-link>
      <router-link 
        to="/Skills-software" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 rounded-full hover:bg-[#232323]"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]"
        >
          <span>Skills & Software</span>
      </router-link>
      <router-link 
        to="/About" 
        class="w-1/4 flex items-center justify-center py-3 md:py-5 hover:bg-[#232323] rounded-full"
        active-class="bg-[#E2E2E2] text-[#111] font-bold transition-all duration-300 ease-in hover:bg-[#E2E2E2]" 
        >
          <span>About</span>
      </router-link>
    </div>
  </div>

    <!--Mobile navbar-->
    <div class="fixed md:hidden flex justify-center items-center bottom-0 left-0 right-0 h-16 border-t border-[#262626] z-50 bg-[#171717]"> 
      <ul class="w-full flex justify-around items-center">
        <li>
          <router-link 
          to="/"
          class="text-[#FFFF] transition-all duration-300"
          active-class="text-[#4F4F4F]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="28px" height="28px" fill-rule="nonzero" class="active:scale-150 transition-all duration-300"><g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M39.5,43h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-9c0,-1.105 -0.895,-2 -2,-2h-4c-1.105,0 -2,0.895 -2,2v9c0,1.381 -1.119,2.5 -2.5,2.5h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-19.087c0,-2.299 1.054,-4.471 2.859,-5.893l14.212,-11.199c0.545,-0.428 1.313,-0.428 1.857,0l14.214,11.199c1.805,1.422 2.858,3.593 2.858,5.891v19.089c0,1.381 -1.119,2.5 -2.5,2.5z"></path></g></g></svg>
          </router-link>
        </li>
        <li>
          <router-link 
          to="/Projects"
          class="text-[#FFFF] transition-all duration-300"
          active-class="text-[#4F4F4F]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" x="0" y="0" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class="active:scale-150 transition-all duration-300"><g><path d="M170.667 0h-128C19.135 0 0 19.135 0 42.667v128c0 23.531 19.135 42.667 42.667 42.667h128c23.531 0 42.667-19.135 42.667-42.667v-128C213.333 19.135 194.198 0 170.667 0zM426.667 0h-128C275.135 0 256 19.135 256 42.667v128c0 23.531 19.135 42.667 42.667 42.667h128c23.531 0 42.667-19.135 42.667-42.667v-128C469.333 19.135 450.198 0 426.667 0zM170.667 256h-128C19.135 256 0 275.135 0 298.667v128c0 23.531 19.135 42.667 42.667 42.667h128c23.531 0 42.667-19.135 42.667-42.667v-128C213.333 275.135 194.198 256 170.667 256zM416 341.333h-32v-32a10.66 10.66 0 0 0-10.667-10.667H352a10.66 10.66 0 0 0-10.667 10.667v32h-32A10.66 10.66 0 0 0 298.666 352v21.333A10.66 10.66 0 0 0 309.333 384h32v32A10.66 10.66 0 0 0 352 426.667h21.333A10.66 10.66 0 0 0 384 416v-32h32a10.66 10.66 0 0 0 10.667-10.667V352A10.66 10.66 0 0 0 416 341.333z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>
          </router-link>
        </li>
        <li>
          <router-link 
          to="/Skills-software"
          class="text-[#FFFF] transition-all duration-300"
          active-class="text-[#4F4F4F]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class="active:scale-150 transition-all duration-300"><g><path fill="currentColor" fill-rule="evenodd" d="M13.395 1.324a3.162 3.162 0 0 0-2.79 0l-8.752 4.31c-1.137.56-1.137 2.173 0 2.733l8.752 4.309a3.161 3.161 0 0 0 2.79 0l8.752-4.31c1.137-.56 1.137-2.173 0-2.733zM1.903 10.61a.5.5 0 0 1 .442 0l8.26 4.067a3.162 3.162 0 0 0 2.79 0l8.26-4.067a.5.5 0 0 1 .442 0l.05.024c1.137.56 1.137 2.174 0 2.733l-8.752 4.31a3.162 3.162 0 0 1-2.79 0l-8.752-4.31c-1.137-.56-1.137-2.173 0-2.733zm.442 5a.5.5 0 0 0-.442 0l-.05.025c-1.137.56-1.137 2.173 0 2.733l8.752 4.309a3.162 3.162 0 0 0 2.79 0l8.752-4.31c1.137-.56 1.137-2.173 0-2.733l-.05-.024a.5.5 0 0 0-.442 0l-8.26 4.067a3.162 3.162 0 0 1-2.79 0z" clip-rule="evenodd" opacity="1" data-original="#000000"></path></g></svg>
          </router-link>
        </li>
        <li>
          <router-link 
          to="/About"
          class="text-[#FFFF] transition-all duration-300"
          active-class="text-[#4F4F4F]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="active:scale-150 transition-all duration-300"><g><circle cx="256" cy="114.526" r="114.526" fill="currentColor" opacity="1" data-original="#000000"></circle><path d="M256 256c-111.619 0-202.105 90.487-202.105 202.105 0 29.765 24.13 53.895 53.895 53.895h296.421c29.765 0 53.895-24.13 53.895-53.895C458.105 346.487 367.619 256 256 256z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>
          </router-link>
        </li>
      </ul>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const route = useRoute();
const content = ref(null);
// const navb = ref(false)
console.log(route);

onMounted(() => {
    gsap.from(content.value, {
        delay: 0.5,
        duration: 1,
        y: '-100',
        autoAlpha: 0,
        stagger: 0.25,
        ease: "back.out(1.7)",
    });
});

</script>
<style scoped>
</style>
