import { createRouter, createWebHashHistory } from 'vue-router';
import BaseLayout from './components/BaseLayout.vue';
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        component: BaseLayout,
        redirect: '/home',
        children: [
            { path: 'home', component: HelloWorld },
            { path: 'about', component: About },
        ]
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;