import React from "react";

const PageCountStateContext = React.createContext(undefined)

const PageCountDispatchContext = React.createContext(undefined)

const PageCountContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = React.useState(1);
  return (
    <PageCountDispatchContext.Provider value={setPageCount}>
      <PageCountStateContext.Provider value={pageCount}>
        {children}
      </PageCountStateContext.Provider>
    </PageCountDispatchContext.Provider>
  );
};

export const usePageCountState = () => {
  const state = React.useContext(PageCountStateContext);
  return state;
};

export const usePageCountDispatch = () => {
  const dispatch = React.useContext(PageCountDispatchContext);
  return dispatch;
};

export default PageCountContextProvider;
