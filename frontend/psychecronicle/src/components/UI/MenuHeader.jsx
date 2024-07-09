import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import freudImage from '../../assets/images/freud.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

const MenuHeader = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, marginLeft: 15 }}>
                    <Link to="/">
                        <Avatar src={freudImage} alt="Freud" sx={
                            {
                                width: 100,
                                height: 100
                            }
                        }
                        />
                    </Link>
                    <Typography color="primary" variant="h2" sx={{ marginLeft: 3, marginTop: 4 }}>
                        Psychecronicle
                    </Typography>
                    <Button
                        color="primary"
                        component={Link}
                        to="/psychologists"
                        sx={{ marginLeft: 80 }}
                    >
                        Pioneers
                    </Button>
                    <Button
                        color="primary"
                        component={Link}
                        to="/search"
                    >
                        Search
                    </Button>
                    <Button
                        color="primary"
                        component={Link}
                        to="/concepts"
                    >
                        Concepts
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MenuHeader;