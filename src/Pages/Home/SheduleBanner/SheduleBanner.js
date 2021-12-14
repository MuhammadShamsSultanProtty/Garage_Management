import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import machenicBanner from '../../../images/machenicBanner.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { width } from '@mui/system';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '175px',
    backgroundColor: 'rgba(45,58,74,.9)',
    backgroundBlendMode: 'darken,luminosity',
    // backgroundPosition: 'center',
    // // backgroundWidth: '70%'
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '80% 80%'
};

const SheduleBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{
                            width: '400px',
                            marginTop: '-110px'
                        }}
                        src={machenicBanner} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box >
                        <Typography variant='h5' sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            MACHENIC
                        </Typography>
                        <Typography variant='h4' sx={{ my: 5 }} style={{ color: 'white' }}>
                            Call a machenic today.
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 2 }} style={{ color: 'white', fontWeidth: 200, fontSize: 14 }}>
                            We generally charge 10$ per hour for our services. And the other macheniray charges and vat are not included. If needed you have to send your car to our garage. Please use a registered car. If there is any liggale issue , we won't provide you any services.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SheduleBanner;