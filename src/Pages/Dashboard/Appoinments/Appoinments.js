import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
const Appoinments = () => {
    const { user } = useAuth();
    const [appoinments, setAppoinments] = useState([]);
    useEffect(() => {
        const url
        fetch('')
    }, [])
    return (
        <div>
            <h2>Bookings are here!</h2>
        </div>
    );
};

export default Appoinments;