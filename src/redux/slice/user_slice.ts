import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserInterface {
  uid: string;
  email: string;
}

const initialState: UserInterface = {
  uid: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<any>) {
      const user = action.payload;
      console.log(user,'user from userSlice //////');
      
      state.email = user.email;
      state.uid = user.uid;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateUser} = userSlice.actions;

export default userSlice.reducer;
