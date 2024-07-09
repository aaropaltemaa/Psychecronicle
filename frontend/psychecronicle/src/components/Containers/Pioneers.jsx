import { Typography } from '@mui/material';
import { initializePsychologists } from '../../reducers/psychologistReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PioneerCard from '../UI/PioneerCard';

const OpeningText = () => {
    return (
        <>
            <Typography variant="h1" style={{ fontWeight: "bold", marginTop: -120 }}>
                Unlock the Minds<br />of the Greats
            </Typography>
            <Typography variant="h6" style={{ marginTop: 35 }}>
                Explore the legendary figures of psychology.
            </Typography>
            <Typography variant="h6" style={{ marginTop: 20 }}>
                From Freud’s cigar habits to Jung’s dream diaries, get to know the quirkiest minds in history.
            </Typography>
            <Typography variant="h6" style={{ marginTop: 20 }}>
                Dive in and meet the pioneers who shaped how we understand ourselves today.
            </Typography>
        </>
    );
};

const PioneerList = () => {
    const dispatch = useDispatch();
    const psychologists = useSelector(state => state.psychologists);

    useEffect(() => {
        dispatch(initializePsychologists());
    }, [dispatch]);

    return (
        <div style={{ marginRight: 1000, marginTop: 50 }}>
            {psychologists.map(p => (
                <div key={p.id} style={{ marginBottom: '50px' }}> {/* Add margin here */}
                    <PioneerCard psychologistId={p.id} />
                </div>
            ))}
        </div>
    );
};

const Pioneers = () => {
    return (
        <div>
            <OpeningText />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <PioneerList />
            </div>
        </div>
    );
}

export default Pioneers;