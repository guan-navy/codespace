import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import React from 'react'
import  Image from 'next/image';

export default async function ImagePage({ params}: {params: {slug: string}}) {
    console.log(await params);
    
    const {slug }= await params
    const newsItemSlug = slug
    const newsItem = DUMMY_NEWS.find((news)=>{
        return news.slug === newsItemSlug
      
      })
      if(!newsItem){
        notFound()
      }
  return (
    <div className="fullscreen-image">
        <Image
            src={`/images/news/${newsItem?.image}`}
            layout='fill'
            objectFit='contain'
            alt={newsItem?.title||''}
        ></Image>
    </div>
  )
}
