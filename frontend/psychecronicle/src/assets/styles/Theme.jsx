import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const drawerWidth = 240;

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
                    fontSize: '1.3rem',
                    fontWeight: 700,
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
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '150px',
                    margin: '20px',
                    backgroundColor: blue[50],
                    marginRight: 380,
                    marginLeft: -20,
                    marginTop: -150,
                    borderRadius: 100,
                    boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    width: '100%',
                    maxWidth: 500,
                    bgcolor: 'background.paper',
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    width: 450,
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: 10,
                    borderColor: blue[400],
                    boxShadow: "none",
                    position: 'fixed',
                    top: 290,
                    left: 345,
                    zIndex: 9999,

                },
            },
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 14,
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 400,
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
            fontSize: '1.15rem',
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