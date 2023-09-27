import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addProduct(state, action) {
        state.push(action.payload);
      },
      removeProduct(state, action) {
        state.splice(action.payload, 1)
      }
    }
  });
  const { actions, reducer } = cartSlice;
  export const { addProduct, removeProduct } = actions;
  export default reducer;