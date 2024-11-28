import React from 'react'

import NewsLists from './../../components/news-lists';
import { DUMMY_NEWS } from './../../../dummy-news';
export default function NewsPage() {
  return (
    <>
    <h2>Latest News</h2>
    <NewsLists news={DUMMY_NEWS}></NewsLists>
    </>
  )
}
