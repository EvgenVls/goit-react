import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { featchArticlesWithTotic } from "../../articles-api";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function FeatchArticles() {
      try {
        setLoading(true);
        const data = await featchArticlesWithTotic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    FeatchArticles();
    console.log(articles);
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}

export default App;
