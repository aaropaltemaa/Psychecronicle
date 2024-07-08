import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { initializeQuotes } from '../../reducers/quoteReducer';
import { useDispatch, useSelector } from 'react-redux';

const getRandomPsychologistAndQuote = (psychologists) => {
    const psychologistIndex = Math.floor(Math.random() * psychologists.length);
    const psychologist = psychologists[psychologistIndex];
    const quoteIndex = Math.floor(Math.random() * psychologist.quotes.length);
    const quote = psychologist.quotes[quoteIndex];
    return { name: psychologist.name, quote };
};

const Quotes = () => {
    const dispatch = useDispatch();
    const quotes = useSelector(state => state.quotes);
    const [selectedQuote, setSelectedQuote] = useState({ name: "", quote: "Loading quotes..." });

    useEffect(() => {
        dispatch(initializeQuotes());
    }, [dispatch]);

    useEffect(() => {
        if (quotes.length > 0) {
            setSelectedQuote(getRandomPsychologistAndQuote(quotes));
        }
    }, [quotes]);

    const handleClick = () => {
        setSelectedQuote(getRandomPsychologistAndQuote(quotes));
    };

    return (
        <Box>
            <div style={{ marginTop: 500 }} />
            <Button variant="contained" onClick={handleClick}>Show Random Quote</Button>
            <div style={{ marginTop: 15 }} />
            <Typography variant="h4">
                {selectedQuote.quote}
            </Typography>
            <Typography variant="subtitle1">
                {selectedQuote.name ? `~ ${selectedQuote.name}` : ""}
            </Typography>
        </Box>
    );
}

export default Quotes;