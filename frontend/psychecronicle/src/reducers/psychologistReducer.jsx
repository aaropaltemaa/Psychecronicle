import psychologistService from '../services/psychologists';
import { createSlice } from '@reduxjs/toolkit';

const psychologistsSlice = createSlice({
    name: 'psychologists',
    initialState: [],
    reducers: {
        setPsychologists: (state, action) => {
            return action.payload;
        },
        setOne: (state, action) => {
            return [...state, action.payload];
        }
    }
});

export const initializePsychologists = () => {
    return async dispatch => {
        const psychologists = await psychologistService.getAll();
        dispatch(setPsychologists(psychologists));
    };
};

export const getPsychologist = (id) => {
    return async dispatch => {
        const psychologist = await psychologistService.getOne(id);
        dispatch(setOne(psychologist));
    };
}

export const { setPsychologists, setOne } = psychologistsSlice.actions;

export default psychologistsSlice.reducer;

