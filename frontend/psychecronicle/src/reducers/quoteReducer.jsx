import { createSlice } from '@reduxjs/toolkit';
import psychologistService from '../services/psychologists';

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: [],
    reducers: {
        setQuotes: (state, action) => {
            return action.payload;
        },
    },
});

export const initializeQuotes = () => {
    return async dispatch => {
        const quotes = await psychologistService.getQuotes();
        dispatch(setQuotes(quotes));
    };
};

export const { setQuotes } = quoteSlice.actions;

export default quoteSlice.reducer;