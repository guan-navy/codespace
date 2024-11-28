import { DUMMY_NEWS } from '@/dummy-news'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function NewsLists({news}:{news:typeof DUMMY_NEWS}) {
  return (
    <>
    <div>NewsPage</div>
    <ul className='news-list'>
       {
        news.map((newsItem)=>{
          return (
            <li  key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                
                <Image src={`/images/news/${newsItem.image}`}  
                width={200}
                height={200}
                alt={newsItem.title}
                />
                <span>  {newsItem.title}</span>
              </Link>
             
            </li>
          )
        })
       }
    </ul>
    </>
  )
}
