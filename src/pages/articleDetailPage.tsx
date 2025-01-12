import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import ArticleDetail from "../components/articleDetail";
import { Article } from "../types";
import { useParams } from "react-router-dom";

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await fetchArticles(1);
      const foundArticle = articles.find(
        (article) => article.id.toString() === articleId
      );
      setArticle(foundArticle || null);
    };
    fetchData();
  }, [articleId]);

  if (!article) return <div>Loading...</div>;
  return <ArticleDetail article={article} />;
};

export default ArticleDetailPage;
