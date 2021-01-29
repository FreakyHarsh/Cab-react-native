import React, { FC, useContext, useReducer } from 'react';
const initialState = {
  db: {},
};

export enum Actions {
  setDb = 'setDb',
}

const Context = React.createContext({
  state: initialState,
  dispatch: (_: { type: Actions; payload?: any }) => {},
});

const reducer = (state, action): any => {
  switch (action.type) {
    case Actions.setDb:
      return {
        ...state,
        db: action.payload,
      };

    default:
      return state;
  }
};

export const AppState: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
