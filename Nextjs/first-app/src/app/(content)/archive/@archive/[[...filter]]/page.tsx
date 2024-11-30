import NewsLists from "@/src/components/news-lists";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/src/lib/new";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: { filter: string[] } }) {
  const {filter} =await params;
  console.log(filter);
  const selectYear = filter?.[0];
  const selectMounth = filter?.[1];
  let links = getAvailableNewsYears();
  let news;
  let newsContent = <>no news found</>;
  if (selectYear && !selectMounth) {
    news = getNewsForYear(selectYear);
    links = getAvailableNewsMonths(selectYear);
  }
  if (selectYear && selectMounth) {
    news = getNewsForYearAndMonth(selectYear, selectMounth);
    links = [];
  }
  if (news && news.length > 0) {
    newsContent = <NewsLists news={news}></NewsLists>;
  }
  if (
    (selectYear && !getAvailableNewsYears().includes(Number(selectYear))) ||
    (selectMounth &&
      !getAvailableNewsMonths(selectYear).includes(Number(selectMounth)))
  ) {
    return Error("no news found")
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectYear
                ? `/archive/${selectYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
