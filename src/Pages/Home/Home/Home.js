import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ManageServices from '../ManageServices/ManageServices';
import Services from '../Services/Services';
import SheduleBanner from '../SheduleBanner/SheduleBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ManageServices></ManageServices>
            <SheduleBanner></SheduleBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;