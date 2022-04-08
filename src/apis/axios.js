import axios from 'axios'
import store from '../store'


class HttpRequest {
	
    constructor(baseUrl = baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
	
    getInsideConfig(options) {
        let headers = {}
        if (options.headers) {
            //如果传入的参数有额外的请求头,则添加进去
            headers = options.headers
        } else {
            //如果没有额外的请求头,则传默认的请求头
			headers	= {
				'content-type':"application/json",
			}
        }
		if (JSON.parse(sessionStorage.getItem('user'))) {
			// console.log("有token值")
			headers.token = JSON.parse(sessionStorage.getItem('user')).token;
		}
        const config = {
            baseURL: this.baseUrl,
            headers: headers
        }
        return config
    }
	
    interceptors(instance, url) {
        instance.interceptors.request.use(config => {
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })

        instance.interceptors.response.use(res => {
            const {data,status} = res
            if (res.data.code == '1010') {
                return {data,status}
            } else {
                return {data,status}
            }
        }, error => {
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(options), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest