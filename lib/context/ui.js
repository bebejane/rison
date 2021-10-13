import { useReducer, useContext, createContext } from "react";

// initial state
const initialState = {
  showContact:false,
  showNewsletter:false
};

const UIAction = {
  SHOW_CONTACT:'SHOW_CONTACT',
  HIDE_CONTACT:'HIDE_CONTACT',
  SHOW_NEWSLETTER:'SHOW_NEWSLETTER',
  HIDE_NEWSLETTER:'HIDE_NEWSLETTER'
}

const UIReducer = (state, action)=>{  
  switch (action.type) {
    case UIAction.SHOW_CONTACT:
      return { ...state, showContact: true };
    case UIAction.HIDE_CONTACT:
      return { ...state, showContact: false};
    case UIAction.SHOW_NEWSLETTER:
      return { ...state, showNewsletter: true};
    case UIAction.HIDE_NEWSLETTER:
      return { ...state, showNewsletter: false};
    default:
      return state;
  }
}

const UIContext = createContext({});

const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) 
    state = reducers[i](state, action);
  return state;
};

// context provider
const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);
  const value = { state, dispatch };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
// useUI hook
const useUI = () => {
  const context = useContext(UIContext)
  return [context.state, context.dispatch]
}

export { UIContext, UIProvider, useUI, UIAction };