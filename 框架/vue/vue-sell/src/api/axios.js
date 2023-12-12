import axios from 'axios'
const baseUrl = ''
//抛出函数体
export function get(url){
    return function(prams = {}){
        return axios.get(baseUrl+url,{
            prams
        }).then(res=>{
            const {errno,data} = res.data
            if(errno===0)return data
        })
    }
}

// let resFn=get('/seller')
// resFn.then().then(data=>{})
