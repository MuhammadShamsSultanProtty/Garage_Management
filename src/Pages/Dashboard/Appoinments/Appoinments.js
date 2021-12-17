import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appoinments = ({ date }) => {
    const { user } = useAuth();
    const [appoinments, setAppoinments] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/appoinments?email=${user.email}&date=${date}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAppoinments(data));
    }, [date])
    return (
        <div>
            <h2>Bookings are here!</h2>
            <h2>Total bookings:{appoinments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Booking table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">vehicle</TableCell>
                            <TableCell align="right">Hour</TableCell>
                            <TableCell align="right">Rate per hour ($)</TableCell>
                            {/* <TableCell align="right">Total Coast</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.clintName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.hour}</TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appoinments;