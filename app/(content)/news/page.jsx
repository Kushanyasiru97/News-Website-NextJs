"use client";
import NewsList from "@/components/news-list";

export default async function NewsPage() {

      const response = await fetch("http://localhost:8080/news");

      if(!response.ok){
        throw new Error("Failed to fetch News...!");
      }

      const news = await response.json();

  return (
    <>
      <h1>This is News Page</h1>
       <NewsList news={news} />
    </>
  );

}
