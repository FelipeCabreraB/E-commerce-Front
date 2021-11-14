function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        cart.some(function (product) {
          return product.productName === action.payload.productName;
        })
      ) {
        return cart.map((product) => {
          if (product.productName !== action.payload.productName)
            return product;
          if (product.quantity + action.payload.quantity > 10)
            return {
              ...product,
              quantity: 10,
            };
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        });
      } else return [...cart, action.payload];

    case "REMOVE_ITEM":
      return cart.filter(
        (product) => product.productName !== action.payload.productName
      );

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
        if (product.quantity <= 1) return product;
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
