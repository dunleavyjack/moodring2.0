import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const songsSlice = createSlice({
    name: 'songs',
    initialState: {},
    reducers: {},
});

export const songsActions = songsSlice.actions;
export const songsState = (state: RootState) => state.songs;
export default songsSlice.reducer;
