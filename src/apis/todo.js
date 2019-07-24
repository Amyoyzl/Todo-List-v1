import request from '@/utils/request'

export const addTodo = (item) => {
    return request({
        url: '/todos',
        method: 'post',
        data: item
    })
}

export const getTodos = () => {
    return request({
        url: '/todos',
        method: 'get'
    })
}

export const putTodo = (id, item) => {
    return request({
        url: `/todos/${id}`,
        method: 'put',
        data: item
    })
}

export const deleteTodo = (id) => {
    return request({
        url: `/todos/${id}`,
        method: 'delete'
    })
}