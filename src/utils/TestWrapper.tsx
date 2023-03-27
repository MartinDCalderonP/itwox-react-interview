import React, { ReactElement, ReactNode } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { UserProvider } from "context/UserContext";

interface ITestWrapper {
  children: ReactNode;
}

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

const testWrapper = ({ children }: ITestWrapper) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          {children}
          <LocationDisplay />
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  );
};

const renderWithProviders = (ui: ReactElement, route = "/") => {
  window.history.pushState({}, "Test Page", route);
  return render(ui, { wrapper: testWrapper });
};

export default renderWithProviders;
