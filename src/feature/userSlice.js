import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: null,
	userData: null,
	firstName: '',
	lastName: '',
	username: '',
};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		storeToken: (state, action) => {
			state.token = action.payload;
		},
		logout: (state) => {
			state.token = null;
			state.userData = null;
		},
		editUsername: (state, { payload }) => {
			state.username = payload;
		},
		setUser: (state, { payload }) => {
			state.email = payload.email;
			state.firstName = payload.firstName;
			state.lastName = payload.lastName;
			state.username = payload.userName;
		},
	},
});
export const { storeToken, logout, setUser, editUsername } = userSlice.actions;
export default userSlice.reducer;
