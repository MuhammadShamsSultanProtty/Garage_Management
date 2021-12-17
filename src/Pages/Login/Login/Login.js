import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import city from '../../../images/city6.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, isLoading, authError, registerUser, loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        // alert('done');
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 12 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
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



                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">
                            Sign in
                        </Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New user? Please register</Button>
                        </NavLink>

                    </form>}
                    <p>-------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Logged in successfully!</Alert>
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

export default Login;