import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        count: 0,
        home_blogs: [],
        openTab: [], // 所有打开路由
        activeIndex: '/admin/index', // 激活状态
    },
    mutations: {
        increment(state) {
            state.count++
        },
        home_blogs(state, data) {
            state.home_blogs = []
            state.home_blogs = data
        },
        // 添加tabs
        add_tabs(state, data) {
            state.openTab.push(data)
        },
        // 删除tabs
        delete_tabs(state, route) {
            let index = 0
            for (let option of state.openTab) {
                if (option.route == route) {
                    break
                }
                index++
            }
            state.openTab.splice(index, 1)
        },
        // 设置当前激活的tabs
        set_active_index(state, index) {
            state.activeIndex = index
        }
    },
    actions: {

    },
    modules: {

    }
})