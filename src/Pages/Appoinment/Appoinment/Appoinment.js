import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Available from '../Available/Available';
import AppoinmentHeader from './Appoinment-Header/AppoinmentHeader';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <Available date={date}></Available>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;