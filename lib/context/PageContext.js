import React from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const PageStateContext = React.createContext(undefined);
const PageDispatchContext = React.createContext(undefined);

const PageContextProvider = ({ children }) => {
  const [page, setPage] = useSessionStorage("offset", 0);
  return (
    <PageDispatchContext.Provider value={setPage}>
      <PageStateContext.Provider value={page}>
        {children}
      </PageStateContext.Provider>
    </PageDispatchContext.Provider>
  );
};

export const usePageState = () => {
  const state = React.useContext(PageStateContext);
  return state;
};

export const usePageDispatch = () => {
  const dispatch = React.useContext(PageDispatchContext);
  return dispatch;
};

export default PageContextProvider;
