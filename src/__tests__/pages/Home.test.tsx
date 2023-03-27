import React from "react";
import renderWithProviders from "utils/TestWrapper";
import Home from "pages/Home";

describe("Home", () => {
  it("should render Home", () => {
    const container = renderWithProviders(<Home />);

    const homeText = container.getByText("Home");

    expect(homeText).toBeInTheDocument();
  });
});
