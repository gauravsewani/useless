const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // if yes, increase its quantity by one
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // if no, add it with quantity of one
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      // check if the item has more than one quantity in the cart
      const currentItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (currentItem.quantity > 1) {
        // if yes, decrease its quantity by one
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        // if no, remove it from the cart
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
};
