import React from "react";
import { Article, ArticleDetailProps } from "../types";

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const imageUrl = article.media?.[0]?.["media-metadata"]?.[2]?.url;
  return (
    <div className="flex flex-col h-full">
      <img
        src={imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6 flex flex-col justify-between h-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4 flex-grow text-center line-clamp-2">
          {article.abstract}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg font-medium text-center"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleDetail;
