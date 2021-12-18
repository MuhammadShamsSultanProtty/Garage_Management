import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Singleser from '../Singleserv/Singleser';

const ManageServices = () => {
    const [servicer, setServicer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServicer(data))
    }, [])
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {
                        servicer.map(serv => <Singleser
                            serv={serv}
                        ></Singleser>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ManageServices;