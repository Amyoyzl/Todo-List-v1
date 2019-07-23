import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Home from '../components/Home'
import TodoList from '../components/TodoList'
import Mine from '../components/Mine'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/home',
        component: Home,
        children: [{
                path: '/',
                redirect: '/todoList'
            },
            {
                path: '/todoList',
                component: TodoList
            },
            {
                path: '/mine',
                component: Mine
            }
        ]
    },
]

export default new VueRouter({
    routes
})