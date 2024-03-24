import React from 'react';

const InputBox = () => {
    return (
        <div className="w-1/2 border-black">
            <input type="text" />
            <textarea />
        </div>
    );
};

const OutPutBox = () => {
    return (
        <button>Click me</button>
    );
};

const Boxes = () => {
    return (
        <div className="w-1/2 border-5">
            <InputBox />
            <OutPutBox />
        </div>
    );
};

export default Boxes;