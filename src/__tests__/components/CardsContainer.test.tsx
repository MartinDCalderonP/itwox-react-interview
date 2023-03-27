import React from "react";
import renderWithProviders from "utils/TestWrapper";
import CardsContainer from "components/CardsContainer";
import { postsMock } from "mocks/posts";
import { commentsMock } from "mocks/comments";

describe("CardsContainer", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(
      <CardsContainer posts={postsMock} comments={commentsMock} />
    );

    const firstPostTitle = container.getByText(postsMock[0].title);

    expect(firstPostTitle).toBeInTheDocument();
  });
});
