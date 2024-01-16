import httpInstance from "@/utils/http";


export function getCategpry(){
   return httpInstance({
        url:'home/category/head'
    })
}