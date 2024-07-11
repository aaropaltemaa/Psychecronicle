import { Typography, Grid } from "@mui/material";
import allConcepts from "./AllConcepts";
import { blue } from "@mui/material/colors";

const OpeningText = () => {
    return (
        <>
            <Typography variant="h1" style={{ fontWeight: "bold", marginTop: -120 }}>
                Taxonomy of the Psyche
            </Typography>
            <Typography variant="h6" style={{ marginTop: 35 }}>
                Psychechronicle classifies historical psychologists according to their official theories and contributions with key concepts.<br></br> Below, I share my insights and the concepts I’ve defined.
            </Typography>
        </>
    );
};

const Concepts = () => {
    return (
        <Grid container spacing={8}>
            {Object.entries(allConcepts).map(([concept, definition], index) => (
                <Grid item xs={5} key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h3 style={{ backgroundColor: blue[400], color: 'white', padding: '10px', borderRadius: '0px 300px 0 0', width: '20%' }}>{concept}</h3>
                    <Typography variant="h6" style={{ padding: '10px' }}>{definition}</Typography>
                </Grid>
            ))}
        </Grid>
    );
};

const ConceptList = () => {
    return (
        <div>
            <OpeningText />
            <br />
            <br />
            <Concepts />
        </div>
    );
}

export default ConceptList;
