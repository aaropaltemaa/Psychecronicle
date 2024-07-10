import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializePsychologists } from '../../reducers/psychologistReducer';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { TextField, Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [jsonResults, setJsonResults] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPsychologists = async () => {
            const psychologists = await dispatch(initializePsychologists());
            setJsonResults(psychologists || []);
        }

        fetchPsychologists();
    }, [dispatch]);

    return (
        <Card>
            <Autocomplete
                freeSolo
                id="search-autocomplete"
                disableClearable
                options={jsonResults.map((option) => option.name)}
                renderOption={(props, option) => (
                    <li {...props}>
                        <Link to={"/search"} style={{ textDecoration: 'none' }}>
                            {option.name}
                        </Link>
                    </li>
                )}
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
    );
}

export default SearchBar;

