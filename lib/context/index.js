import { useReducer, createContext } from "react";
import { appState } from "./reducers/appState";

// initial state
const initialState = {
  showContact:false
};

// create context
const AppContext = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) 
    state = reducers[i](state, action);
  return state;
};

// context provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appState, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider};