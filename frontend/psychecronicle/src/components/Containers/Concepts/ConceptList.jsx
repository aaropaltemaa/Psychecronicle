import { Typography } from "@mui/material";
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
        <div>
            {Object.entries(allConcepts).map(([concept, definition]) => (
                <div key={concept} style={{ marginBottom: '10px', borderRadius: '5px' }}>
                    <h3 style={{ backgroundColor: blue[400], color: 'white', padding: '10px', marginRight: 1400, borderRadius: '0px 300px 0 0' }}>{concept}</h3>
                    <Typography variant="h6" style={{ padding: '10px', marginLeft: -10 }}>{definition}</Typography>
                </div>
            ))}
        </div>
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
