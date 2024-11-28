import React from 'react'

import DetailData from './../_components/DetailData';
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
): Promise<Metadata> {
  // 使用 await 来解析 Promise 对象
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  console.log(resolvedParams);
  console.log(resolvedSearchParams);

  // 假设你想要根据 `searchParams` 中的某个值来设置标题，比如 `searchParams.query`（这里只是一个例子，具体根据你的需求）
  const title = resolvedSearchParams.name ? ` ${resolvedSearchParams.name}` : 'Detail Page';

  return {
    title: title,
  }
}

export default function DeatilPage() {

    console.log('run on server')
  return (
    <div>
        <DetailData></DetailData>
 
        </div>
  )
}
