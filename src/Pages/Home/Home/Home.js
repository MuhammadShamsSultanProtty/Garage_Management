import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SheduleBanner from '../SheduleBanner/SheduleBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <SheduleBanner></SheduleBanner>
        </div>
    );
};

export default Home;