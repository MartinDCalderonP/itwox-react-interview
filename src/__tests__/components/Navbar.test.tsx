import React from "react";
import renderWithProviders from "utils/TestWrapper";
import userEvent from "@testing-library/user-event";
import Navbar from "components/Navbar";

describe("Navbar", () => {
  it("should render Navbar", () => {
    const container = renderWithProviders(<Navbar />);

    const navbar = container.getByText("Sign In");

    expect(navbar).toBeInTheDocument();
  });

  it("should redirect to /sign-in when Sign In is clicked", () => {
    const container = renderWithProviders(<Navbar />);
    const signIn = container.getByText("Sign In");

    userEvent.click(signIn);

    const location = container.getByTestId("location-display");

    expect(location.textContent).toBe("/sign-in");
  });
});
