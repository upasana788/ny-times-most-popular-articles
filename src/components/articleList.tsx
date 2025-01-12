import React from "react";
import { Link } from "react-router-dom";
import { Article, ArticleListProps } from "../types";
import ArticleDetail from "./articleDetail";


const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-black py-4 mb-8">
        <h2 className="text-3xl font-semibold text-center text-white">
          NY Most Popular Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col h-full"
            key={article.id}
          >
            <ArticleDetail article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
