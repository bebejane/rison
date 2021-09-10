export function click(state, action) {
  
  switch (action.type) {
    case "ADD_CLICK":
      return { ...state, clicks: ++state.clicks };
    default:
      return state;
  }
}