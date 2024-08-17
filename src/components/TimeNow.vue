<template>
    <div class="flex items-center justify-center pt-4 md:pt-8">
        <h3 class="text-[#7B7B7B] leading-5 font-normal text-[10px] md:text-xs tracking-wider">{{ formattedTime }}</h3>
    </div>
</template>
<script setup>
import {ref, computed, onMounted} from 'vue';
const time = ref('');

const fetchTime = async () => {
    try {
    const response = await fetch('http://worldtimeapi.org/api/ip');
    const data = await response.json();
    time.value = data.datetime;
    } catch (error) {
    console.error('Error fetching time:', error);
    }
};

const formattedTime = computed(() => {
    if (!time.value) return '';
    const date = new Date(time.value);
    const options = {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    };
    return date.toLocaleString('en-US', options);
});

onMounted(() => {
    fetchTime();
    setInterval(fetchTime, 500);
});


</script>