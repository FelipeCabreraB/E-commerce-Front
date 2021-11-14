function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...cart, action.payload];

    case "ADD_ONE_QUANTITY":
      return cart.map((product) => {
        if (product.productName !== action.payload.productName) return product;
        if (product.quantity >= 10) return product;
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      });

    case "REMOVE_ONE_QUANTITY":
      return cart.map((product) => {
        if (product.productName !== action.payload.productName) return product;
        if (product.quantity <= 0) return product;
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      });

    case "LOGOUT":
      return [];

    default:
      return cart;
  }
}

export default cartReducer;
