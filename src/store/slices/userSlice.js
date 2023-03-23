import { createSlice } from '@reduxjs/toolkit';
import usersData from '../../data/users.data.json';
const initialState = {
	users: [],
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		filter: (state) => {
			state.users = usersData;
		},
	},
});

export const { filter } = userSlice.actions;

export default userSlice.reducer;
