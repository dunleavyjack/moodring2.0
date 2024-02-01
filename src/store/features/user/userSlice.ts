import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {},
});

export const userActions = userSlice.actions;
export const userState = (state: RootState) => state.user;
export default userSlice.reducer;
