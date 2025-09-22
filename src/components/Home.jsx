import React from 'react';

import Header from './Header';
import MainSection from './MainSection';
import Services from './Services';
import Footer from './Footer';
import CopyRight from './CopyRight';

export const Home = () => {
    return (
        <>
            <Header />
            <MainSection />
            <Services />
            <Footer />
            <CopyRight />
        </>
    )
}
