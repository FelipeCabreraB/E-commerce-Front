function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        cart.some((product) => {
          return (
            product.productName === action.payload.productName &&
            product.grindingType === action.payload.grindingType
          );
        })
      ) {
        return cart.map((product) => {
          if (product.productName !== action.payload.productName)
            return product;
          if (product.grindingType !== action.payload.grindingType)
            return product;
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        });
      } else return [...cart, action.payload];

    case "REMOVE_ITEM":
      return cart.filter((product) => {
        return !(
          product.grindingType === action.payload.grindingType &&
          product.productName === action.payload.productName
        );
      });

    case "ADD_ONE_QUANTITY":
      return cart.map((product) => {
        if (product.productName !== action.payload.productName) return product;
        if (product.grindingType !== action.payload.grindingType)
          return product;
        if (
          cart
            .filter((product) => {
              return product.productName === action.payload.productName;
            })
            .reduce((acc, value) => acc + value.quantity, 0) >= product.stock
        )
          return product;
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      });

    case "REMOVE_ONE_QUANTITY":
      return cart.map((product) => {
        if (product.productName !== action.payload.productName) return product;
        if (product.grindingType !== action.payload.grindingType)
          return product;
        if (product.quantity <= 1) return product;
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      });

    case "LOGOUT":
      return [];

    case "CHECKOUT":
      return [];

    default:
      return cart;
  }
}

export default cartReducer;
