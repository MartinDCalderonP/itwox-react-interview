import { reducer, State, Action, initialState } from "context/reducer";

describe("Reducer", () => {
  it("should return the initial state", () => {
    const state: State = reducer(initialState, {} as Action);

    expect(state).toEqual(initialState);
  });

  it("should handle SET_USER", () => {
    const user = {
      email: "test@test.com",
    };

    const action = {
      type: "SET_USER",
      payload: {
        user,
      },
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      user,
    });
  });
});
