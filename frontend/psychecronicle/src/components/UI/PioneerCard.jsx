import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const PioneerCard = ({ psychologistId }) => {
    const psychologist = useSelector(state => state.psychologists.find(p => p.id === psychologistId));
    const [psychologistImage, setPsychologistImage] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            try {
                const image = await import(`../../assets/images/${psychologistId}.jpg`);
                setPsychologistImage(image.default);
            } catch (error) {
                console.error('Failed to load image', error);
                // Handle the error or set a default image
            }
        };

        if (psychologistId) {
            loadImage();
        }
    }, [psychologistId]);

    if (!psychologist) {
        return null;
    }

    // Convert ISO strings to Date objects
    const birthDate = new Date(psychologist.birthDate);
    const deathDate = new Date(psychologist.deathDate);

    // Format dates to readable strings
    const formattedBirthDate = birthDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedDeathDate = deathDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });


    return (
        <Grid container spacing={3} alignItems="center">
            <Grid item>
                <Avatar src={psychologistImage} alt={psychologist.name} style={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item xs>
                <Typography variant="h5" color="inherit" sx={{ fontWeight: "bold" }}>
                    {psychologist.name}
                </Typography>
                <Typography variant="h6" color="primary">
                    {`${formattedBirthDate} - ${formattedDeathDate}`}
                </Typography>
                <Typography variant="h6">
                    {psychologist.field}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    {psychologist.biography}
                </Typography>
            </Grid>
        </Grid>
    );
}

PioneerCard.propTypes = {
    psychologistId: PropTypes.string.isRequired
};

export default PioneerCard;