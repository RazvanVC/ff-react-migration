const initialState = {
  cart: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 1,
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@cart/add_to_cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "@cart/remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "@cart/empty_cart":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export const addToCart = (id) => {
  return {
    type: "@cart/add_to_cart",
    payload: id,
  };
};

export default cartReducer;
