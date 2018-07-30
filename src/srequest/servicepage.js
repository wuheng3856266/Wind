import axios from 'axios'
import Api from '../api/Api.js'


//请求如风客故事列表
export function getStoryList(){
    return new Promise((resolve,reject)=>{
        axios.get(Api.WIND_STORY).then((res)=>{
            resolve(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    })
}