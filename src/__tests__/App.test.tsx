import React from "react";
import { render } from "@testing-library/react";
import App from "App";

describe("App", () => {
  it("should render App", () => {
    const container = render(<App />);

    const homeText = container.getByText("Home");

    expect(homeText).toBeInTheDocument();
  });
});
