import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { width } from '@mui/lab/node_modules/@mui/system';
import BookingModal from '../Appoinment/BookingModal/BookingModal';


const styles =
{

    media: {
        height: 220,
        objectFit: 'none',
    }
};

const Booking = ({ booking, date, setBookingSuccess }) => {


    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { id, name, seat, rate, img } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="220px"
                        image={img}
                        style={styles.media}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ color: '#0b5345' }} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Number of seats :{seat}<br />
                            Coast :{rate}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: ' #73c6b6 ', textAlign: 'center', margin: '0 auto', width: '120px' }}>Book</Button>
                    </CardActions>
                </Card>
            </Grid>
            <BookingModal
                date={date}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                booking={booking}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;