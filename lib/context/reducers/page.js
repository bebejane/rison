export function page(state, action) {
  
  switch (action.type) {
    case "ADD_MENU":
      return { ...state, menu: action.payload };
    case "ADD_CLICK":
        return { ...state, clicks: ++state.clicks };
    default:
      return state;
  }
}