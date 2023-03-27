import React from "react";
import renderWithProviders from "utils/TestWrapper";
import Loader from "components/Loader";

describe("Loader", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Loader />);

    const loader = container.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
