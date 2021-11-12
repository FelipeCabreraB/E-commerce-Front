function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload;

    case "REMOVE_ITEM":
      return;

    case "UPDATE_ITEM":
      return [...action.payload, ...cart];

    case "LOGOUT":
      return [];

    default:
      return cart;
  }
}

export default cartReducer;
