"use client";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading to true
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("http://localhost:8080/news");

        if (!response.ok) {
          throw new Error("Failed to fetch news...!");
        }

        const news = await response.json();
        setNews(news);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // Always set loading to false after fetching
      }
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...!</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>This is News Page</h1>
      {news ? <NewsList news={news} /> : <p>No news available</p>}
    </>
  );
}
