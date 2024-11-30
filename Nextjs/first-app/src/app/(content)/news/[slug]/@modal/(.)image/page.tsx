/* eslint-disable @next/next/no-img-element */
"use client";

import { notFound, useRouter } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';
import { use } from 'react';
export default function InterceptedImagePage({ params }:
  { params:Promise<{slug:string}> }
) {
  const router = useRouter()
  const {slug}= use(params)
  const newsItemSlug = slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}