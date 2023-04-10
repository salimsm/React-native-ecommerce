import {configureStore} from '@reduxjs/toolkit';
import cartSlice  from '../slice/cart_slice';
import  userSlice  from '../slice/user_slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice
},
});

//export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
