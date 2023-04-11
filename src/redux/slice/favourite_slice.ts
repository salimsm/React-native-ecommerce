import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavouriteInterface {
  favouriteItem: any[];
}

const initialState: FavouriteInterface = {
  favouriteItem: [],
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavouriteProduct(state, action: PayloadAction<any>) {
      const product = action.payload;
      //console.log(product,'form fav slice');
      
      const existingItem = state.favouriteItem.find(
        (item: any) => item.id == product.id,
      );

      if (!existingItem) {
        state.favouriteItem.push(product);
      } else {
        console.log('already in favourite list');
      }
    },
    removeFavouriteProduct(state, action: PayloadAction<any>) {
      const product = action.payload;
      state.favouriteItem = state.favouriteItem.filter((item)=>item.id !== product.id);      
    },
    clearFavouriteProduct(state){
      state.favouriteItem = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const {addFavouriteProduct,removeFavouriteProduct,clearFavouriteProduct} = favouriteSlice.actions;
export default favouriteSlice.reducer;
