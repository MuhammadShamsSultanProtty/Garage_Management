import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Singleser = ({ serv }) => {
    const { name, coast, seat, image } = serv;
    return (
        // <Grid item xs={12} md={4} sm={6} >
        //     <p>{name}</p>
        //     <p>{coast}</p>
        //     <p>{seat}</p>\
        //     <img style={{ width: '100px' }} src={`data:image/png;base64,${image}`} alt="" />
        // </Grid>


        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, my: 4, height: '400px' }}>
                <img style={{ width: '100px' }} src={`data:image/png;base64,${image}`} alt="" />
                <CardContent>
                    <Typography variant="h2" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Seat: {seat}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Coast per hour: {coast}$
                    </Typography>
                </CardContent>
            </Card>
        </Grid>











    );
};

export default Singleser;