import {createRouter, createWebHistory} from 'vue-router';

const routes = [{
 path: '/',
 name: 'autho',
 component: () => import('./pages/index.vue'),
 meta: {title: "Login"},
}, {
 path: '/noteScreen',
 name: 'noteScreen',
 components: { default:() => import('./src/noteScreen/pages/noteScreen.vue')}
},
];

export const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router;