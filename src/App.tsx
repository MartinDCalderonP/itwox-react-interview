import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "context/UserContext";
import Router from "utils/Router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
