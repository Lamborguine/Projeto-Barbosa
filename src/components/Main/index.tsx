import React from 'react';
import Buttons from './Buttons';
import Boxes from './Boxes';

const Header = () => {
    return (
        <div className="w-full h-full flex flex-row flex-wrap">
            <div className="w-full">
                <Boxes />
            </div>
            <Buttons />
        </div>
    );
};

export default Header;
