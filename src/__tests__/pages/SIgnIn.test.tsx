import React from "react";
import renderWithProviders from "utils/TestWrapper";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "pages/SignIn";

describe("SignIn", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<SignIn />);

    const title = container.getByRole("heading", { name: "Sign In" });
    const emailInput = container.getByLabelText("Email");
    const passwordInput = container.getByLabelText("Password");
    const button = container.getByRole("button");

    expect(title).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("renders email input with error", () => {
    const container = renderWithProviders(<SignIn />);
    const emailInput = container.getByLabelText("Email");

    expect(emailInput).toBeInTheDocument();

    userEvent.type(emailInput, "test");

    waitFor(() => {
      const error = container.getByText("Email has an invalid format");
      expect(error).toBeInTheDocument();
    });
  });

  it("renders password input with error", () => {
    const container = renderWithProviders(<SignIn />);
    const passwordInput = container.getByLabelText("Password");

    expect(passwordInput).toBeInTheDocument();

    userEvent.type(passwordInput, "12345");

    waitFor(() => {
      const error = container.getByText(
        "Password must have at least 6 characters"
      );
      expect(error).toBeInTheDocument();
    });
  });

  it("renders email and password inputs with errors", () => {
    const container = renderWithProviders(<SignIn />);
    const emailInput = container.getByLabelText("Email");
    const passwordInput = container.getByLabelText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    userEvent.type(emailInput, "test");
    userEvent.type(passwordInput, "12345");

    waitFor(() => {
      const emailError = container.getByText("Email has an invalid format");
      const passwordError = container.getByText(
        "Password must have at least 6 characters"
      );
      expect(emailError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
  });

  it("renders disabled button when email and password are empty", () => {
    const container = renderWithProviders(<SignIn />);
    const button = container.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("renders disabled button when email is empty", () => {
    const container = renderWithProviders(<SignIn />);
    const passwordInput = container.getByLabelText("Password");
    const button = container.getByRole("button");

    userEvent.type(passwordInput, "123456");

    waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it("renders disabled button when password is empty", () => {
    const container = renderWithProviders(<SignIn />);
    const emailInput = container.getByLabelText("Email");
    const button = container.getByRole("button");

    userEvent.type(emailInput, "test@test.com");

    waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it("renders enabled button when email and password are not empty", () => {
    const container = renderWithProviders(<SignIn />);
    const emailInput = container.getByLabelText("Email");
    const passwordInput = container.getByLabelText("Password");
    const button = container.getByRole("button");

    userEvent.type(emailInput, "test@test.com");

    waitFor(() => {
      expect(button).toBeDisabled();
    });

    userEvent.type(passwordInput, "123456");

    waitFor(() => {
      expect(button).toBeEnabled();
    });
  });

  it("redirect to dashboard when user is authenticated", () => {
    const container = renderWithProviders(<SignIn />);
    const emailInput = container.getByLabelText("Email");
    const passwordInput = container.getByLabelText("Password");
    const button = container.getByRole("button");
    const location = container.getByTestId("location-display");

    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "123456");

    waitFor(() => {
      expect(button).toBeEnabled();
    });

    userEvent.click(button);

    waitFor(() => {
      expect(location).toHaveTextContent("/dashboard");
    });
  });
});
