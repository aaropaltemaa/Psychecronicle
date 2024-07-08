import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import freudImage from '../../assets/images/freud.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const MenuHeader = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <div style={{ flex: 0.91, display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                    <Avatar src={freudImage} alt="Freud" sx={
                        {
                            width: 100,
                            height: 100
                        }
                    }
                    />
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{ fontSize: 30, textTransform: 'none' }}
                    >
                        Psychecronicle
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/psychologists"
                        sx={{ fontSize: 20, marginLeft: 80, textTransform: 'none' }}
                    >
                        Pioneers
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/search"
                        sx={{ fontSize: 20, textTransform: 'none' }}
                    >
                        Search
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/concepts"
                        sx={{ fontSize: 20, textTransform: 'none' }}
                    >
                        Concepts
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MenuHeader;