import { useState, useEffect, useReducer, createContext } from "react";
import { click } from "./reducers/click";
import { page } from "./reducers/page";

// initial state
const initialState = {
  menu: [],
  clicks:0
};

// create context
const Context = createContext({});
// create context
const MenuContext = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) 
    state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(page, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
// context provider
const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menu, []);
  const value = { state, dispatch };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export { Context, Provider, MenuContext, MenuProvider };