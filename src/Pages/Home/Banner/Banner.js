import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/city7.jpg';
import city from '../../../images/city9.jpg';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    backgroundRepeat: 'no-repeat',
    background: `url(${bg})`


}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 550
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ my: 2, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h2' sx={{ fontWeight: 700, color: '   #154360  ' }}>
                            Welcome to Middili.
                        </Typography>
                        <Typography variant='h4' sx={{ fontWeight: 500, color: '  #FFC300  ' }}>
                            Your journey <br />
                            Start's here
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 600, color: ' #17202', fontSize: 13 }}>
                            Our city name is middili; it is the capital of the state of XYZ. Middili is really rich according to history and literate. It is a very big city and it was the capital of XYZ. There are so many things to see in Middili. Middili is the second largest city in the whole country.
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: 600, color: '#17202', fontSize: 13 }}>
                            Due to its diversity and wonders, it is known as ‘City of Joy’. Middili has its own airport named ‘Netaji Subash Chandra Bose International Airport’. The most spectacular sites to see in Middili are Victoria Memorial, Writer’s Building, National Library, Saheed Minar, Howrah Bridge, Fort Williams, Birla Planetarium, and Nicco Park, etc.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#d4ac0d  ' }}>Know more</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={city} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;