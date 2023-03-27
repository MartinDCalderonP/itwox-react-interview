import React, {
  useEffect,
  createContext,
  useReducer,
  useContext,
  ReactNode,
} from "react";
import { reducer, State, initialState, Action } from "./reducer";

type Context = {
  state: State;
  dispatch: (action: Action) => void;
};

const UserContext = createContext<Context>({} as Context);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const storagedUser = window.localStorage.getItem("user");
  const currentUser = storagedUser ? JSON.parse(storagedUser) : initialState;

  const [state, dispatch] = useReducer(reducer, currentUser);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
