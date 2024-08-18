<template>
    <div class="w-[90%] md:w-3/5 xl:w-2/5 2xl:w-1/4">
        <TimeNow />
        <Profile />
        <HomeProjects />
        <Stack />
        <Contact />
    </div>
</template>
<script setup>
import TimeNow from '../components/TimeNow.vue'
import Profile from '../components/Profile.vue'
import HomeProjects from '../components/HomeProjects.vue'
import Stack from '../components/Stack.vue'
import Contact from '../components/Contact.vue'
</script>

<style scoped>

</style>