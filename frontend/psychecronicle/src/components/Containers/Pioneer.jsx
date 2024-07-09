import { useEffect } from 'react';
import { getPsychologist } from '../../reducers/psychologistReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Divider, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import EventSubheading from '../UI/EventSubHeading';
import React from 'react';
import getEventTitleMapping from '../../utils/eventTitleMappings';

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
                            <Typography variant="h4" style={{ fontSize: "2.5rem", fontWeight: "bold", marginTop: "-150px" }}>
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