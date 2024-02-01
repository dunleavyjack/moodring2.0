import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {},
    reducers: {},
});

export const sessionActions = sessionSlice.actions;
export const sessionState = (state: RootState) => state.session;
export default sessionSlice.reducer;
