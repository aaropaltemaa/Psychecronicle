import { useEffect } from 'react';
import { getPsychologist } from '../../reducers/psychologistReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Divider, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import EventSubheading from '../UI/EventSubHeading';
import React from 'react';

const getEventTitleMapping = (psychologistId) => {
    const mappings = {
        '668c2d51b169a298a9977465': {
            event1: "Custom Title 1 for Psychologist 1",
            event2: "Custom Title 2 for Psychologist 1",
        },
        '668c771bf8cce054610eda34': {
            event1: "Custom Title 1 for Psychologist 2",
            event2: "Custom Title 2 for Psychologist 2",
        },
        '668d478c946d5f8d4e28d289': {
            event1: "Custom Title 1 for Psychologist 3",
            event2: "Custom Title 2 for Psychologist 3",
        },
        '668d48de946d5f8d4e28d290': {
            event1: "Custom Title 1 for Psychologist 4",
            event2: "Custom Title 2 for Psychologist 4",
        },
    };

    // Return the mapping for the given psychologist ID, or a default mapping if not found
    return mappings[psychologistId] || {
        event1: "Default Custom Title 1",
        event2: "Default Custom Title 2",
    };
};

const Pioneer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getPsychologist(id));
        }
    }, [dispatch, id]);

    const psychologist = useSelector(state => state.psychologists.find(p => p.id === id));

    if (!psychologist) {
        return null;
    }

    return (
        <div>
            <Grid container spacing={2} direction="column" >
                <Grid item xs={12} container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h4" style={{ fontWeight: "bold", marginTop: "-150px" }}>
                                {psychologist.name}
                            </Typography>
                            <Divider sx={{ backgroundColor: blue[400], height: '2px', my: 2 }} />
                            {psychologist.life.length > 0 && Object.entries(psychologist.life[0]).map(([key, event], index) => {
                                if (key === '_id') return null;

                                let style = {};
                                switch (index) {
                                    case 0:
                                        style = { marginBottom: '20px', };
                                        break;
                                    default:
                                        style = { color: 'black', marginBottom: '30px' };
                                }

                                const eventTitleMapping = getEventTitleMapping(psychologist.id);

                                const customTitle = eventTitleMapping[key] || key;

                                return (
                                    <React.Fragment key={key}>
                                        <EventSubheading title={customTitle} />
                                        <Typography variant="h6" style={style}>
                                            {event}
                                        </Typography>
                                    </React.Fragment>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}


export default Pioneer