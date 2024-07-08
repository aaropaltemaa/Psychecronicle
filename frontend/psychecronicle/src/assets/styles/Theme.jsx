import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const drawerWidth = 0;

const theme = createTheme({
    palette: {
        primary: {
            main: blue[400],
        },
        secondary: {
            main: blue[200],
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '20px',
                    fontSize: '1.2rem',
                },
                contained: {
                    '&:hover': {
                        backgroundColor: blue[200],
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: drawerWidth,
                    background: 'white',
                    color: 'black',
                    elevation: 0,
                    boxShadow: 'none',
                },
            },
        },
        MuiToolBar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'white',
                    color: 'black',
                    elevation: 0,
                    boxShadow: 'none',
                },
            },
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 14,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.875rem',
        },
    },
});

export default theme;