import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            redirect: '/home'
        },
        {
            path: "/home",
            component: () => import('@vi/home/Index.vue')
        },
        {
            path: "/about",
            component: () => import('@vi/home/About.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: '/404'
        },
        {
            path: "/404",
            component: () => import('@vi/NotFound.vue')
        },
    ]
})

const originalPush = createRouter.prototype.push
createRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next({
            name: from.name
        }) : next('/home')
    } else {
        if (to.path == '/404' || to.path == '/' || to.path == '/home' || to.path == '/about')
            return next()
        else {
            const tokeninfo = JSON.parse(localStorage.getItem('TokenInfo'))
            if (!tokeninfo) {
                localStorage.clear()
                return next('/login')
            }
            next()
        }
    }
})

export default router