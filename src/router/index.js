import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main/index'
import Home from '@/views/home/index'
import Mine from '@/views/home/Mine'
import TodoList from '@/views/todoList/index'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Main,
        name: 'main'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: '/todoList',
                component: TodoList,
                alias: '/'
            },
            {
                path: '/mine',
                component: Mine
            }
        ]
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})