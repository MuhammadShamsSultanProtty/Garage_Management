import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddServices = () => {
    const [name, setName] = useState('');
    const [seat, setSeat] = useState('');
    const [coast, setCoast] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('seat', seat);
        formData.append('coast', coast);
        formData.append('image', image);



        fetch('http://localhost:5000/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    console.log("Added");
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <h1>Add Services</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    onChange={e => setName(e.target.value)}
                    sx={{ width: '50%', my: 1 }}
                    id="outlined-basic"
                    label="Vehicle name/type"
                    variant="outlined" />
                <br />
                <TextField
                    onChange={e => setSeat(e.target.value)}
                    sx={{ width: '50%', my: 1 }}
                    required
                    label="Number of seats"
                    type="number"
                />
                <br />
                <TextField
                    onChange={e => setCoast(e.target.value)}
                    sx={{ width: '50%', my: 1 }}
                    required
                    label="Costs"
                    type="number"
                />
                <br />
                <p>Upload the image here</p>
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddServices;