import { render, screen } from "@testing-library/react";
import ArticleList from "../articleList";
import { Article } from "../../types";

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Test Article 1",
    abstract: "This is a test article.",
    url: "https://example.com/article-1",
    media: [],
  },
  {
    id: "2",
    title: "Test Article 2",
    abstract: "This is a test article 2.",
    url: "https://example.com/article-1",
    media: [],
  },
];

describe("ArticleList", () => {
  it("renders the list of articles correctly", () => {
    render(<ArticleList articles={mockArticles} />);

    const article1Title = screen.getByText("Test Article 1");
    const article2Title = screen.getByText("Test Article 2");
    expect(article1Title).toBeInTheDocument();
    expect(article2Title).toBeInTheDocument();
  });
});
