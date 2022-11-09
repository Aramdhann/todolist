import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const PageLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default PageLayout;
