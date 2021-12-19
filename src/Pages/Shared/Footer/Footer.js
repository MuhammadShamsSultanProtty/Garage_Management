import React from 'react';
import { Alert, Container, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';



const Footer = () => {
    return (
        <div style={{ backgroundColor: '  #5dade2 ', borderTop: '5px solid black', padding: '10px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} sm={4}>
                    <LocationOnTwoToneIcon style={{ fontSize: '50' }}></LocationOnTwoToneIcon>
                    <Typography variant="h6">Street:x, xxxxxxxxxxx, xxxxxxxxx-2,<br /> Road-16, Thane (west)</Typography>
                    <Typography >City:xxxxxxxx</Typography>
                    <Typography >State/province/area: xxxxxxxxxxx</Typography>
                </Grid>
                <Grid item xs={12} md={4} sm={4}>
                    <DashboardCustomizeOutlinedIcon style={{ fontSize: '50' }}></DashboardCustomizeOutlinedIcon>
                    <Typography variant="h6">Developed by</Typography>
                    <Typography variant="h6">&copy;Muhammad Shams Sultan Prottoy</Typography>
                    <Typography>Version:00.00.00</Typography>
                    <Typography>19-12-2021</Typography>

                </Grid>
                <Grid item xs={12} md={4} sm={4}>
                    <CallIcon></CallIcon>
                    <Typography sx={{ my: 1 }}>X19122021XX</Typography>
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <LinkedInIcon></LinkedInIcon>
                    <EmailIcon></EmailIcon>
                    <GitHubIcon></GitHubIcon>
                    <br />
                    <LocationOnIcon></LocationOnIcon>
                    <Typography>131-xxxx,YYYY,ZZZZ</Typography>
                </Grid>
            </Grid>
        </div >
    );
};

export default Footer;