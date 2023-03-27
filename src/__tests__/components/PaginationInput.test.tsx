import React from "react";
import renderWithProviders from "utils/TestWrapper";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import PaginationInput from "components/Pagination/PaginationInput";

describe("PaginationInput", () => {
  const currentPage = 1;
  const numberOfPages = 10;

  it("renders correctly", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const input = container.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("renders the correct value", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const input = container.getByRole("textbox");

    expect(input).toHaveValue(currentPage.toString());
  });

  it("renders the correct number of pages", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const numberOfPagesText = container.getByText(`of ${numberOfPages}`);

    expect(numberOfPagesText).toBeInTheDocument();
  });

  it("changes the value when the user types", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const input = container.getByRole("textbox");

    userEvent.type(input, "2");

    waitFor(() => {
      expect(input).toHaveValue("2");
    });
  });

  it("changes the value when the user types a non-number", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const input = container.getByRole("textbox");

    userEvent.type(input, "a");

    waitFor(() => {
      expect(input).toHaveValue(currentPage.toString());
    });
  });

  it("prevent the user from typing a number greater than the number of pages", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const input = container.getByRole("textbox");

    userEvent.type(input, "11");

    waitFor(() => {
      expect(input).toHaveValue(numberOfPages.toString());
    });
  });

  it("change the url when the user clicks the button", () => {
    const container = renderWithProviders(
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    );

    const input = container.getByRole("textbox");
    const button = container.getByRole("button");

    userEvent.type(input, "2");
    userEvent.click(button);

    waitFor(() => {
      const location = container.getByTestId("location-display");
      expect(location).toHaveTextContent("/dashboard/2");
    });
  });
});
