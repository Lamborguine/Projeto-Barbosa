import React from 'react';
import Buttons from './Buttons';
import Boxes from './Boxes';

const Header = () => {
    return (
        <div className="w-screen h-screen flex flex-row flex-wrap">
            <div className="w-full">
                <Boxes />
            </div>
            <Buttons />
        </div>
    );
};

export default Header;
