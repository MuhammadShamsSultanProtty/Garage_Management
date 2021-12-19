import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSucess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('  https://intense-hamlet-43267.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    console.log(data);
                    setEmail('');
                    setSucess(true);
                }
            })
        e.preventdefault();
    }
    return (
        <div>
            <h2>Make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' variant="contained" color="success">
                    Make Admin
                </Button>
            </form>
            {
                success && <Alert severity="success">Admin added successfully!</Alert>
            }
        </div >
    );
};

export default MakeAdmin;