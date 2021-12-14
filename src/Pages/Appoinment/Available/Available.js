import React from 'react';
import cycle1 from '../../../images/cycle1.jpg';
import bike from '../../../images/bike.jpg';
import car1 from '../../../images/car.jpg';
import car2 from '../../../images/car.jpg';
import suv1 from '../../../images/suv1.PNG';
import suv2 from '../../../images/suv3.png';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'By cycle',
        seat: 1,
        rate: '1$ per hour',
        img: cycle1
    },
    {
        id: 2,
        name: 'Bike',
        seat: 2,
        rate: '5$ per hour',
        img: bike
    },
    {
        id: 3,
        name: 'Car',
        seat: 2,
        rate: '8$ per hour',
        img: car1
    },
    {
        id: 4,
        name: 'Car',
        seat: 4,
        rate: '10$ per hour',
        img: car2
    },
    {
        id: 5,
        name: 'Suv',
        seat: 5,
        rate: '15$ per hour',
        img: suv1
    },
    {
        id: 6,
        name: 'Suv',
        seat: 7,
        rate: '18$ per hour',
        img: suv2
    },

]

const Available = ({ date }) => {
    return (
        <Container>
            <Typography variant='h3' sx={{ color: '#73c6b6', my: 5 }}>Available vehicles on : {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking

                        key={booking.id}
                        date={date}
                        booking={booking}

                    ></Booking>)
                }
            </Grid>
        </Container >
    );
};

export default Available;