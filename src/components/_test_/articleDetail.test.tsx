import { render, screen } from "@testing-library/react";
import ArticleDetail from "../articleDetail";
import { Article } from "../../types";

const mockArticle = {
  id: "1",
  title: "Test Article 1",
  abstract: "This is a test article.",
  url: "https://example.com/article-1",
  media: [
    {
      "media-metadata": [
        { url: "https://via.placeholder.com/150" },
        { url: "https://via.placeholder.com/150" },
        { url: "https://via.placeholder.com/150" },
      ],
    },
  ],
};

describe("ArticleDetail", () => {
  it("renders the  article title and abstract correctly", () => {
    render(<ArticleDetail article={mockArticle} />);
    const title = screen.getByRole("heading", { name: /Test Article 1/i });
    const abstract = screen.getByText(/This is a test article./i);
    expect(title).toBeInTheDocument();
    expect(abstract).toBeInTheDocument();
  });
});
