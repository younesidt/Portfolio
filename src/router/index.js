import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../views/HomeView.vue';
import Projects from '../views/Projects.vue';
import SkillsSoftware from "../views/SkillsSoftware.vue";
import About from '../views/About.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/Skills-software',
            name: 'skillsSoftware',
            component: SkillsSoftware
        },
        {
            path: '/About',
            name: 'about',
            component: About
        },
    ]
})

export default router;