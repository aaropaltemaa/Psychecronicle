import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const EventSubheading = ({ title }) => {
    const style = { marginBottom: '10px', fontWeight: 'bold', fontSize: '1.3rem', color: blue[400] };

    return (
        <Typography variant="h6" style={style}>
            {title}
        </Typography>
    );
};

EventSubheading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default EventSubheading;