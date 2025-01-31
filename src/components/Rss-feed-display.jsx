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
            <li key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
              <img src={article.favicon} alt="Favicon" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
              <strong>{article.site}</strong>
              <br />
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <br />
              <small>{new Date(article.date).toLocaleString()}</small>
              <br />
              {article.thumbnail && (
                <img src={article.thumbnail} alt="Thumbnail" style={{ width: "100px", height: "auto", marginTop: "5px" }} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
}
