import { useState } from "react";
import Header from "./components/header/Header";
import NewsList from "./components/NewsList";
// import { newsData } from "./utils.js/data";
import { newsData } from "./components/utils.js/data";

export default function App(){
  const [news ,setNews] = useState (newsData)
  const getkeywords = (event) => {
    let keywords = (event.target.value);
    let filtered = newsData.filter(item => {
      return item.title.indexOf(keywords)>-1;
    })
    setNews(filtered)
  }
  return(<>
<Header  getkeywords={getkeywords}/>
<NewsList news={news}/>
  </>)
}