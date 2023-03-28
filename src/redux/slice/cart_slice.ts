import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
      console.log(product);
      

      const existingItem = state.cartItem.find(
        (item: any) => item.id == product.id,
      );
      
      if (!existingItem) {
        state.cartItem.push(product);
        state.totalItem += product.itemQty;
        state.totalPrice += product.itemTotalPrice;
      } else {
        console.log('already in cart');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct} = cartSlice.actions;

export default cartSlice.reducer;
