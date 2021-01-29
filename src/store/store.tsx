import React, { FC, useContext, useReducer } from 'react';

export enum Actions {
  setName = 'setDb',
  setCarNumber = 'setCarNumer',
  setTotalSeats = 'setTotalSeats',
  setPhoneNumber = 'setPhoneNumber',
}

const initialState = {
  name: '',
  carNumber: '',
  totalSeats: '',
  phoneNumber: '',
};

const Context = React.createContext({
  state: initialState,
  dispatch: (_: { type: Actions; payload?: any }) => {},
});

const reducer = (state, action): any => {
  switch (action.type) {
    case Actions.setName:
      return {
        ...state,
        name: action.payload,
      };
    case Actions.setCarNumber:
      return {
        ...state,
        carNumber: action.payload,
      };
    case Actions.setTotalSeats:
      return {
        ...state,
        totalSeats: action.payload,
      };
    case Actions.setPhoneNumber:
      return {
        ...state,
        phoneNumber: action.payload,
      };

    default:
      return state;
  }
};

export const AppStateGlobal: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
