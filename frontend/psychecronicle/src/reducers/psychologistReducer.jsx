import psychologistService from '../services/psychologists';
import { createSlice } from '@reduxjs/toolkit';

const psychologistsSlice = createSlice({
    name: 'psychologists',
    initialState: [],
    reducers: {
        setPsychologists: (state, action) => {
            return action.payload;
        },
    }
});

export const initializePsychologists = () => {
    return async dispatch => {
        const psychologists = await psychologistService.getAll();
        dispatch(setPsychologists(psychologists));
    };
};


export const { setPsychologists } = psychologistsSlice.actions;

export default psychologistsSlice.reducer;

