import axios from 'axios'

let axiosInstance = axios.create({
    baseURL:'',
    headers:{'Content-Type': 'application/json;charset=UTF-8'},
    timeout:1000 * 60* 15
})

axiosInstance.interceptors.request.use((config:any)=>{
    config.headers.token = sessionStorage.getItem('token') || ''
    if(config.method === 'post' && Object.prototype.toString.call(config.data) !== '[object Object]'){
      Promise.reject('post中data不是一个对象')
      return
    } 
    if(config.method === 'get' && Object.prototype.toString.call(config.params) !== '[object Object]'){
        Promise.reject('get中data不是一个对象')
        return
      } 
        //如果post的data不是一个对象 那么返回一个false
    return config;
},error=>{
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response=>{
    // if(response.data.error.errorCode === 401){
    //     window.location.href = '/'
    //     sessionStorage.clear()
    //     return
    // }
    return response && response.data
})

export  const axiosMethod = {
    get: function get(url:string,data:object){
        data = data? data :{}
        return axiosInstance.get(url,{params:data})
    },
    post:function post(url:string,data:object){
        return axiosInstance.post(url,data)
    }
}
