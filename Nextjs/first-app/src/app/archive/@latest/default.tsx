import NewsLists from "@/src/components/news-lists"
import { getLatestNews} from "@/src/lib/new"

export default function page() {

  

  const news= getLatestNews()
  // console.log(news)
  return (
    <>
    <NewsLists news={news}></NewsLists>
    </>
  )
}
