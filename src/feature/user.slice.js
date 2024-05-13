import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: sessionStorage.getItem('token') || null,
  userData: null,
  firstName: '',
  lastName: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem('token', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.token = null;
      state.userData = null;
      sessionStorage.removeItem('token');
    },
    setUser: (state, action) => {
        state.userData = action.payload.body;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName ;
        sessionStorage.setItem('firstName', JSON.stringify(action.payload));
      }
  }
});

export const { storeToken, logout, setUser } = userSlice.actions;
export default userSlice.reducer;