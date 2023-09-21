import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IBooksInterface from "../../../interfacec/bookInterface";

export interface ICart {
  product: IBooksInterface[];
  total: number;
}

const initialState = {
  product: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state:ICart, action: PayloadAction<IBooksInterface>) => {
      const existing = state.product.find((p) => p._id === action.payload._id);
      if (existing) {
        existing.Quantity++;
      } else {
        state.product.push({ ...action.payload, Quantity: 1 });
      }
      state.total =
        state.total + JSON.parse(action.payload.Price as unknown as string);
    },
    removeOneFromCart: (state:ICart, action: PayloadAction<IBooksInterface>) => {
      const existing = state.product.find((p) => p._id === action.payload._id);
      if (existing!.Quantity > 1) {
        existing!.Quantity--;
          state.total = state.total - action.payload.Price;
      } else {
        const items = state.product.filter((p) => p._id !== action.payload._id);
        state.total =
          state.total - action.payload.Price * action.payload.Quantity!;
        state.product = items;
      }
    },

    removeFromCart: (state:ICart, action: PayloadAction<IBooksInterface>) => {
      const items = state.product.filter((p) => p._id !== action.payload._id);
      state.total =
        state.total - action.payload.Price * action.payload.Quantity!;
      state.product = items;
    },
  },
});

export const { addtoCart, removeFromCart, removeOneFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
