import axios from './request'

export const getToken = (data) => {
    return axios.request({
        url: '/api/lapp/token/get',
        method: 'post',
        data: data
    })
}