import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const EventSubheading = ({ title }) => {
    const style = { color: 'grey', marginBottom: '10px' };

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