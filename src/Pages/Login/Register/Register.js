import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import city from '../../../images/city6.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, logout, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('done');
        if (loginData.password !== loginData.password2) {
            alert('password did not matched');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 12 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            // required
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            // required
                            id="standard-basic"
                            name='password'
                            onChange={handleOnChange}
                            label="Your Password"
                            type="password"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            // required
                            id="standard-basic"
                            name='password2'
                            onChange={handleOnChange}
                            label="Conform Password"
                            type="password"
                            variant="standard" />



                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">
                            Submit
                        </Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already registered? Please login</Button>
                        </NavLink>

                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User created successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', marginTop: '22%' }} src={city} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;