import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { TextFields } from '@mui/icons-material';
import useAuth from '../../../../hooks/useAuth'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {

    const { name, rate } = booking;
    const { user } = useAuth();
    const handleBookingSubmit = e => {
        alert('Submitting');
        handleBookingClose();

        //Collect data
        //send to the server

        e.preventDefault();
    }

    return (
        <div>
            {/* <Button onClick={handleBookingOpen}>Open modal</Button> */}
            <Modal
                open={openBooking}
                onClose={handleBookingClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ color: ' #48c9b0' }} gutterBottom variant="h6" id="modal-modal-title" component="h2">
                        Vehicle: {name}

                    </Typography>
                    <Typography gutterBottom variant="h6" id="modal-modal-description" sx={{ color: ' #48c9b0', mt: 2 }}>
                        You have to pay {rate}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder='Hour'
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder='Your Name'
                            defaultValue={user.displayName}
                            type="text"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder='Your Phone Number'
                            type="text"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder='Your Email'
                            defaultValue={user.email}
                            type="email"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            defaultValue={date.toDateString()}
                        />
                        <Button type='submit ' variant='contained' style={{ backgroundColor: '#48c9b0', marginLeft: '10px' }}>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div >
    );
};

export default BookingModal;