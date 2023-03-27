import React from "react";
import renderWithProviders from "utils/TestWrapper";
import Dashboard from "pages/Dashboard";

describe("Dashboard", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Dashboard />);

    const title = container.getByText("Dashboard");

    expect(title).toBeInTheDocument();
  });
});
