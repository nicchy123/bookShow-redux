import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import booksInterface from '../../../interfacec/bookInterface';

export interface ICart {
  product: booksInterface[],
  total: number
}

const initialState = {
  product: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart:(state, action:PayloadAction<booksInterface>)=>{
      const existing = state.product.find(p=> p._id === action.payload._id);
      console.log(existing)
      if(existing){
        existing.Quantity++;
      }else{
        state.product.push({...action.payload, Quantity: 1})
    }
    state.total = state.total + JSON.parse(action.payload.Price as unknown as string)
    },
     removeFromCart:(state,action:PayloadAction<booksInterface>)=>{
      const items = state.product.filter(p=> p._id !== action.payload._id);
      state.product = items;
     }
  },
})

export const { addtoCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer