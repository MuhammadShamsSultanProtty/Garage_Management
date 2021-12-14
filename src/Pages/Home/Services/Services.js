import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import car from '../../../images/car.jpg';
import mechanice from '../../../images//mechanic.jpg';
import drivers from '../../../images/driver.jpg';

const services = [
    {
        name: 'Vehicles for Rent',
        description: 'This is a paid service in our city. You can take any available vehicle for your use and pay for it.You have to pay for fule seperately',
        img: car
    },
    {
        name: 'Repairing',
        description: 'This is a paid service in our city. You can take any available mechanice for your service and pay for him. You have to pay per hour charges for him',
        img: mechanice
    },
    {
        name: 'Driver',
        description: 'This is a paid service in our city. You can take any available driver for your service and pay for him. You can also take weekly and monthly pacages.',
        img: drivers
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500, color: 'info.main', m: 5 }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                Here is Your Required Services
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;