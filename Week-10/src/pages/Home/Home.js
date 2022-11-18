import React, { Fragment } from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Shorter from '../../components/Shorter/Shorter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <Shorter />
            <Footer />
        </Fragment>
    )
}

export default Home