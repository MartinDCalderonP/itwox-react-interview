type User = {
  email: string;
};

export type State = {
  user: User | null;
};

export const initialState = {
  user: null,
};

export type Action = {
  type: string;
  payload?: {
    user: User;
  };
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

export const reducer = (state: State, action?: Action): State => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case actionTypes.SET_USER:
      if (!action.payload) {
        return state;
      }

      return {
        ...state,
        user: action.payload.user,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};
