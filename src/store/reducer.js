import {
  ADD_TABLE_DATA,
  APPROVED_PRODUCT,
  MISSING_PRODUCT,
  UPDATE_PRODUCT,
} from "./action";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TABLE_DATA: {
      const data = action.payload;

      return data;
    }

    case APPROVED_PRODUCT: {
      const { productId } = action.payload;
      const filteredData = state.map((product) =>
        product.id === productId ? { ...product, status: "Approved" } : product
      );

      return filteredData;
    }

    case MISSING_PRODUCT: {
      const { productId, isMissingUrgent } = action.payload;
      const filteredData = state.map((product) => {
        return product.id === productId
          ? {
              ...product,
              status: isMissingUrgent ? "Missing urgent" : "Missing",
            }
          : product;
      });

      return filteredData;
    }

    case UPDATE_PRODUCT: {
      const { productId, price, quantity } = action.payload;

      const updatedData = state.map((product) =>
        product.id === productId
          ? { ...product, price, quantity, total: price * quantity }
          : product
      );

      return updatedData;
    }

    default:
      return state;
  }
};
