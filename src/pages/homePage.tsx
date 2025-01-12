import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import ArticleList from "../components/articleList";
import { Article } from "../types";

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedArticles = await fetchArticles(1);
      setArticles(fetchedArticles);
    };
    fetchData();
  }, []);
  return <ArticleList articles={articles} />;
};

export default HomePage;
