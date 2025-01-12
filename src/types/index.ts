export interface Article {
  id: string;
  title: string;
  abstract: string;
  url: string;
  media: Array<any>;
}

interface Media {
  type: string;
}

export interface ArticleDetailProps {
  article: Article;
}

export interface ArticleListProps {
  articles: Article[];
}
