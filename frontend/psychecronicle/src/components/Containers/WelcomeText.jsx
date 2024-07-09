import { Typography } from '@mui/material';

const WelcomeText = () => {
    return (
        <>
            <Typography variant="h1" style={{ fontWeight: "bold", marginTop: -120 }}>
                Welcome to the<br />Hall of Minds!
            </Typography>
            <Typography variant="h6" style={{ marginTop: 35 }}>
                Hey there, curious mind! Ever wondered what made Carl Jung tick or what Sigmund Freud was really thinking?
            </Typography>
            <Typography variant="h6" style={{ marginTop: 20 }}>
                Well, you have come to the right place. PsycheChronicle is your backstage pass to the wild world of historical psychologists.
            </Typography>
            <Typography variant="h6" style={{ marginTop: 20 }}>
                Perfect for students, researchers, and anyone curious about the field. Dive in and uncover the legacy of psychology’s greatest thinkers.
            </Typography>
        </>
    );
};

export default WelcomeText;