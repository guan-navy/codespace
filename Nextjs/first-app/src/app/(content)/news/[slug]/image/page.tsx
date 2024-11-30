/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default async function ImagePage({ params }: { params: { slug: string } }) {
  const {slug} =await params;
  const newsItemSlug = slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}