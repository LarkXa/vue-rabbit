//axios 基础封装
import axios from 'axios'
const httpInstance= axios.create({
//根域名
baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net'
,timeout:`5000`
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    //config 配置对象
    //config.headers
    return config
},err=>{
    return Promise.reject(err)

})

//axios响应拦截器
httpInstance.interceptors.response.use(res=>{
    return res.data
},err=>{
    return Promise.reject(err)
})

export default httpInstance
