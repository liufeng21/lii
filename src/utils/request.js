//这里是封装的ajax请求
import axios from 'axios'
const instance = axios.create({
    timeout:5000
})

//封装get请求
export function get(url,params){
    return instance.get(url,{
        params
    })
}

//封装post请求
export function post(url,data){
    return instance.post(url,data)
}