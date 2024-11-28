
import React from'react'
import { DUMMY_NEWS } from '../../../../dummy-news'
import  Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function NewsDetail({params}: {params: {slug: string}}) {
  
const newsSlug = params.slug
const newsItem = DUMMY_NEWS.find((news)=>{
  return news.slug === newsSlug

})
if(!newsItem){
  notFound()
}
  return (<>
  <article>
    <header>
      <Link
      href={`/news/${newsSlug}/image`}
      >
      <Image src={`/images/news/${newsItem?.image}`}
      width={200}
      height={200}
      alt={newsItem?.title||''}
      />
      </Link>
      
      <h1>{newsItem?.title}</h1>
      <time dateTime={newsItem?.date}>
        {newsItem?.date}
      </time>
    </header>
    <p>{newsItem?.content}</p>
  </article>
  </>
    
  )
}
