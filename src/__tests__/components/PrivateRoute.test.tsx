import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";

describe("PrivateRoute", () => {
  it("redirects to home page if user is not logged in", async () => {
    const PrivateComponent = () => <div>Private</div>;
    const PublicComponent = () => <div>Public</div>;
    const container = render(
      <MemoryRouter initialEntries={["/private"]}>
        <Routes>
          <Route path="/" element={<PublicComponent />} />
          <Route
            path="/private"
            element={
              <PrivateRoute redirectTo="/">
                <PrivateComponent />
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(container.getByText("Public")).toBeInTheDocument();
    expect(container.queryByText("Private")).not.toBeInTheDocument();
  });
});
