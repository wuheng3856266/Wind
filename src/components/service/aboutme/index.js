import axios from 'axios'
import API from '../../../api'

export function getUserMoney(id){
    return new Promise((resolve,reject)=>{
        axios.get(API.MINE_MONEY+id)
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            resolve(error)
        })
    })
    
}