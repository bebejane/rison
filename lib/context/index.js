import { useReducer, useContext, createContext } from "react";

// initial state
const initialState = {
  showContact:false
};

const actionTypes = {
  SHOW_CONTACT:'SHOW_CONTACT',
  HIDE_CONTACT:'HIDE_CONTACT'
}
// create context
const AppContext = createContext({});
const appStateReducer = (state, action)=>{  
  switch (action.type) {
    case "SHOW_CONTACT":
      return { ...state, showContact: true };
    case "HIDE_CONTACT":
      return { ...state, showContact: false};
    default:
      return state;
  }
}
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) 
    state = reducers[i](state, action);
  return state;
};

// context provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppState = () => {
  const context = useContext(AppContext)
  return [context.state, context.dispatch]
}

export { AppContext, AppProvider, useAppState, actionTypes};