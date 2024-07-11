import { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import allConcepts from './AllConcepts';

const FlashcardsPage = () => {
    const [currentConceptIndex, setCurrentConceptIndex] = useState(0);
    const [showDefinition, setShowDefinition] = useState(false);
    const concepts = Object.entries(allConcepts);

    const handleToggleDefinition = () => {
        setShowDefinition(!showDefinition);
    };

    const handleNextConcept = () => {
        setShowDefinition(false); // Reset definition visibility for the next concept
        setCurrentConceptIndex((prevIndex) => (prevIndex + 1) % concepts.length); // Loop back to the first concept after the last one
    };

    const currentConcept = concepts[currentConceptIndex];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Card variant="outlined" style={{ width: '300px', minHeight: '200px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" component="div">
                    {currentConcept[0]}
                </Typography>
                {showDefinition && (
                    <CardContent>
                        <Typography variant="body1">{currentConcept[1]}</Typography>
                    </CardContent>
                )}
                <Button onClick={handleToggleDefinition} style={{ marginTop: '10px' }}>
                    {showDefinition ? 'Hide Definition' : 'Show Definition'}
                </Button>
            </Card>
            <Button variant="contained" onClick={handleNextConcept} style={{ marginTop: '20px' }}>
                Next Concept
            </Button>
        </div>
    );
};

export default FlashcardsPage;