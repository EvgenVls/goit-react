import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { featchArticlesWithTotic } from "../../articles-api";
import SearchForm from "../SearchForm/SerrchForm";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getArticles() {
      try {
        setError(false);
        setLoading(true);
        const data = await featchArticlesWithTotic(query, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, [query, page]);

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />

      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      {loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}

export default App;

// try {
//   setArticles([]);
//   setError(false);
//   setLoading(true);
//   const data = await featchArticlesWithTotic(topic);
//   setArticles(data);
// } catch (error) {
//   setError(true);
// } finally {
//   setLoading(false);
// }
