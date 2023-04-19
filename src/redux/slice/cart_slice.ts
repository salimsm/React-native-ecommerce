import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

interface CartInterface {
  cartItem: any[];
  totalItem: number;
  totalPrice: number;
}

const initialState: CartInterface = {
  cartItem: [],
  totalItem: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<any>) {
      const product = action.payload;
      const existingItem = state.cartItem.find(
        (item: any) => item.id == product.id,
      );

      if (!existingItem) {
        state.cartItem.push(product);
        state.totalItem += product.itemQty;
        state.totalPrice += product.itemTotalPrice;
      } else {
        Toast.show({
          type: 'success',
          text1: 'Already Added',
          position: 'bottom',
        });
      }
    },
    removeProduct(state, action: PayloadAction<any>) {
      const product = action.payload;
      state.cartItem = state.cartItem.filter(item => item.id !== product.id);
      state.totalItem -= product.itemQty;
      state.totalPrice -= product.itemTotalPrice;
    },
    clearProduct(state) {
      state.cartItem = [];
      state.totalPrice = 0;
      state.totalItem = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct, removeProduct, clearProduct} = cartSlice.actions;
export default cartSlice.reducer;
