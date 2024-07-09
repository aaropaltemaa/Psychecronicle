import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
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

    const birthDate = new Date(psychologist.birthDate);
    const deathDate = new Date(psychologist.deathDate);

    const formattedBirthDate = birthDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedDeathDate = deathDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });


    return (
        <Grid container spacing={3} alignItems="center">
            <Grid item>
                <Avatar src={psychologistImage} alt={psychologist.name} style={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item xs>
                <Link to={`/psychologists/${psychologist.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h5" color="black" sx={{
                        fontWeight: "bold", "&:hover": {
                            color: "primary.main",

                        }
                    }}>
                        <u>{psychologist.name}</u>
                    </Typography>
                </Link>
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

export default PioneerCard 