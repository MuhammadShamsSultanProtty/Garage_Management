import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appoinments from '../Appoinments/Appoinments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
                <Appoinments
                    date={date}
                ></Appoinments>
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;