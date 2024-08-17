<template>
    <div class="pt-4 md:pt-6 flex flex-col items-center justify-center">
        <div 
            class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[url('../../src/assets/profile.jpeg')] bg-cover border md:border-2 border-[#262626]" 
        >
        <img src="../assets/profile.jpeg" class="hidden" alt="">
        </div>
        <div class="flex flex-col items-center justify-center">
            <h3 
                class="text-[#FFFFFF] pt-4 text-xl md:text-2xl font-medium"  
            >Younes Idtalab</h3>
            <div 
                class="flex items-center space-x-1 md:space-x-2" 
            >
                <p class="text-[#7B7B7B] pt-1 text-base md:text-lg font-normal">Front-end Developer Based In Morocco </p>
                <img src="../assets/maroc.png" class="pt-1 h-5 md:h-6" alt="maroc">
            </div>
            <div class="flex items-center justify-center pt-3 space-x-3">
                <div class="relative h-3 w-3 flex items-center justify-center">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
                </div>
                <p class="text-[#7B7B7B] text-xs md:text-sm font-normal">Available for new opportunities</p>
            </div>
            <div class="flex items-center justify-center py-4 md:py-6 space-x-4 md:space-x-6">
                <div>
                    <a href="https://github.com/younesidt" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" class="w-6 h-6 md:w-8 md:h-8 fill-current text-[#7B7B7B] hover:text-[#FFFF] transition duration-300 cursor-pointer">
                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/younes-idtalab/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" class="w-6 h-6 md:w-8 md:h-8 fill-current text-[#7B7B7B] hover:text-[#FFFF] transition duration-300 cursor-pointer">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/younes.vue/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" class="w-6 h-6 md:w-8 md:h-8 fill-current text-[#7B7B7B] hover:text-[#FFFF] transition duration-300 cursor-pointer">
                            <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="flex items-center justify-center space-x-4">
                <div>
                    <button @click="copyEmail" :class="CopyBtn === 'Copy email' ? 'space-x-2 px-6 md:px-10 bg-[#1E1E1E] hover:bg-[#262626] text-[#FFFF] bg-opacity-100' : 'space-x-1 px-8 md:px-14 bg-[#1E1E1E] text-[#7B7B7B] cursor-default'" class="flex items-center py-2 border border-[#262626] rounded-md text-xs md:text-sm font-medium transition-all duration-300">
                        <span>{{ CopyBtn }}</span>
                        <svg v-if="CopyBtn === 'Copy email'" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class="w-3 h-3 md:w-4 md:h-4"><g><path d="M565 640H225c-41.36 0-75-33.64-75-75V225c0-41.36 33.64-75 75-75h340c41.36 0 75 33.64 75 75v340c0 41.36-33.64 75-75 75zM225 200c-13.785 0-25 11.215-25 25v340c0 13.785 11.215 25 25 25h340c13.785 0 25-11.215 25-25V225c0-13.785-11.215-25-25-25zM100 440H75c-13.785 0-25-11.215-25-25V75c0-13.785 11.215-25 25-25h340c13.785 0 25 11.215 25 25v23.75h50V75c0-41.36-33.64-75-75-75H75C33.64 0 0 33.64 0 75v340c0 41.36 33.64 75 75 75h25zm0 0" fill="#FFFF" opacity="1" class=""></path></g></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 26" class="w-2 h-2 md:w-3 md:h-3"><path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z" fill="#7B7B7B"></path></svg>
                    </button>
                </div>
                <div>
                    <p class="text-[#7B7B7B]">or</p>
                </div>
                <div>
                    <a href="mailto:younesidtalab@gmail.com" class="flex items-center space-x-2 text-[#171717] bg-[#E2E2E2] hover:bg-[#FFFF] py-2 px-6 md:px-10 rounded-md text-xs md:text-sm font-medium transition-all duration-300">
                        <span>Contact me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class="w-3 h-3 md:w-4 md:h-4"><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#171717" opacity="1" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a29.997 29.997 0 0 0-13.368 24.967v.025c0 17.737 14.38 32.116 32.118 32.116h417.763c17.737 0 32.117-14.379 32.117-32.116v-.025c0-10.033-5.012-19.4-13.367-24.967-40.769-27.185-163.615-109.076-209.806-139.876a32.129 32.129 0 0 0-35.651 0C163.614-109.076 40.769-27.185 0 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(28.369 375.624)" fill="none" stroke="#171717" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="M0 0v-289.199a32.096 32.096 0 0 1 9.415-22.718 32.096 32.096 0 0 1 22.718-9.415h417.732a32.096 32.096 0 0 1 22.718 9.415 32.096 32.096 0 0 1 9.415 22.718V0" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(15.001 400.6)" fill="none" stroke="#171717" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path></g></g></svg>
                    </a>
                </div>
            </div>
            <div class="pt-4 md:pt-8 flex items-center justify-center">
                <p class="font-Mono text-[#7B7B7B] text-opacity-100 text-[8px] md:text-[10px] leading-4 font-medium">KECH, MA · 31.632462° N, -8.008238° W</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const showName = ref(false);
const showDetails = ref(false);
const CopyBtn = ref("Copy email")

function copyEmail() {
  const mail = "younesidtalab@gmail.com";
  if(CopyBtn.value === "Copy email"){
    navigator.clipboard.writeText(mail).then(() => {
        CopyBtn.value = "Copied";
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
  }
}
</script>