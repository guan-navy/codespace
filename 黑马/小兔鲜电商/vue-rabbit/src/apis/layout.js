import httpInstance from "@/utils/http";
export function getCategpryAPI(){
    return httpInstance({
        url: '/home/category/head'
    })
}