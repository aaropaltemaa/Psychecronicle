/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializePsychologists } from '../../reducers/psychologistReducer';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { TextField, Card, Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

const GuideText = () => {
    return (
        <Box style={{ position: "absolute", top: 150 }}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
                Psychosearch
            </Typography>
            <Typography variant="h6" style={{ marginTop: 15 }}>
                Decode Freud, explore Jung, or walk through Piaget — find all the juicy details here!
            </Typography>
        </Box>
    );
};

const SearchBarFunction = () => {
    const [jsonResults, setJsonResults] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPsychologists = async () => {
            try {
                const psychologists = await dispatch(initializePsychologists());
                setJsonResults(psychologists || []);
                console.log("Psychologists fetched:", psychologists);
            } catch (error) {
                console.error("Failed to fetch psychologists:", error);
            }
        };

        fetchPsychologists();
    }, [dispatch]);

    return (
        <div>
            <GuideText />
            <div style={{ height: 100 }} />
            <Card>
                <Autocomplete
                    freeSolo
                    id="search-autocomplete"
                    disableClearable
                    options={jsonResults} // Use the full objects
                    getOptionLabel={(option) => option.name} // Specify how to get the label from an option object
                    renderOption={(props, option) => {
                        const { key, ...restProps } = props;
                        return (
                            <li key={key} {...restProps} style={{ padding: 0 }}>
                                <Link to={`/psychologists/${option.id}`} style={{ textDecoration: 'none', width: '100%', display: 'block', padding: '8px 16px' }}>
                                    {option.name}
                                </Link>
                            </li>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search for a psychologist"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                                style: { borderRadius: 10 }
                            }}
                            style={{ backgroundColor: 'white', borderRadius: 10 }}
                        />
                    )}
                />
            </Card>
        </div>
    );
};

SearchBarFunction.propTypes = {
    jsonResults: PropTypes.array,
    setJsonResults: PropTypes.func,
    dispatch: PropTypes.func,
    key: PropTypes.number
};

const SearchBar = () => {
    return (
        <div>
            <SearchBarFunction />
        </div>
    );
};

export default SearchBar;
