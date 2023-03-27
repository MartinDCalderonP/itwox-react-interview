import React from "react";
import renderWithProviders from "utils/TestWrapper";
import Layout from "components/Layout";

describe("Layout", () => {
  it("should render children", () => {
    const container = renderWithProviders(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>
    );

    const testText = container.getByText("Test Layout");

    expect(testText).toBeInTheDocument();
  });

  it("should render Navbar", () => {
    const container = renderWithProviders(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>
    );

    const navbar = container.getByText("Sign In");

    expect(navbar).toBeInTheDocument();
  });
});
