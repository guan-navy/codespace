const getJinData = async () =>{
    let res = []
    let count = 50
    //while请求40次非常恐怖
    while (count ==50){
        let url =`https://jinshuju.net/api/v1/forms/${FID}/entries?next`
        if(next){
            url =`${url}?next=${next}`
        }
        const rawData = await fetch(url,{
            header:{
             
            }
        })
        const data = await rawData.json()
        count = data.count
        res = res.concat(data,data)
    }
}