import React from 'react';
import '../../index.css';

const Header = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-5">
                <span className="font-bold text-[25px]">✔️ To Do List</span>
            </div>
            <hr className="w-screen mt-5"></hr>
        </>
    );
};

export default Header;
