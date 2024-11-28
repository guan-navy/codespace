
import React from 'react'
import Link from 'next/link'
const loadDataFromMHY = () => {
    return fetch('https://api-mall.mihoyogift.com/common/homeishop/v1/goods/search_goods_spu_list?limit=40&page=1&shop_code=ys&order_by=comprehensive&category_id=23&show_sale_type=1&hide_sold_out=false&random=true').
    then((res) => {
        return res.json()
    })
}
export default async function List() {
    const mhyData = await loadDataFromMHY()
    // console.log(mhyData)
  
    
  return (
    <div className='listPage'>
        list页面
        
        <div>
            {
                mhyData.data.list.map((item:{goods_id:string,name:string}) => {
                    return (
                        <div key={item.goods_id}>
                           <li >
                               
                               <Link href={`/list/${item.goods_id}?name=${item.name}`}> {item.name}</Link>

                           </li>
                        </div>
                    )
                })}
        </div>
        </div>
  )
}
