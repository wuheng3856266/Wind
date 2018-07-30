import axios from 'axios'

export function getUserMoney(id){
    return new Promise((resolve,reject)=>{
        axios.get('/walletController/queryWallentByUid/'+id)
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            resolve(error)
        })
    })
    
}