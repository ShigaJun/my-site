import { useEffect, useState } from "react";

export default function RssFeedDisplay() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/.netlify/functions/fetch-rss");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
        setArticles([]);
      }
    })();
  }, []);

  return (
    <div>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
}
