import React from 'react';
import '../../index.css';

const Footer = () => {
    return (
        <div className="flex justify-center">
            <div className="absolute bottom-0 text-gray-400">
                © 2022{' '}
                <a href="https://www.linkedin.com/in/mochraditya/" className="text-blue-400 underline">
                    Moch. Raditya Aulya Aramdhan
                </a>
            </div>
        </div>
    );
};

export default Footer;
