import { DUMMY_NEWS } from '@/dummy-news'
import NewsLists from '@/src/components/news-lists'
import React from 'react'


export default function NewsPage() {
  return (
    <>
    <h2>Latest News</h2>
    <NewsLists news={DUMMY_NEWS}></NewsLists>
    </>
  )
}
