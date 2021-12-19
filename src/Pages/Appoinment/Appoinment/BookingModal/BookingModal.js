import React, { useState } from 'react';
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

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {

    const { name, rate } = booking;
    const { user } = useAuth();
    const [bookingInfo, setBookingInfo] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);

    }
    const handleBookingSubmit = e => {
        // alert('Submitting');
        //Collect data
        const appoinment = {
            ...bookingInfo,
            rate,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        // console.log(appoinment);

        //send to the server
        fetch('  https://intense-hamlet-43267.herokuapp.com/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })


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
                            name='hour'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder='Your Name'
                            // defaultValue={user.displayName}
                            type="text"
                            name='clintName'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder='Your Phone Number'
                            type="text"
                            name='phone'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-number"
                            placeholder={user.email}
                            // defaultValue={user.email}
                            type="email"
                            name='email'
                            onBlur={handleOnBlur}
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