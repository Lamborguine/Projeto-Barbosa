import React from 'react';

const correcoes = [
    {
        palavra: 'original',
        correcao: 'corrigido',
        explicacao: 'explicacao'
    }
]

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

    async function apiCall() {
        const response = await fetch('http://localhost:3000/correcoes');
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="w-1/2 border-5">
            <InputBox />
            <OutPutBox />
        </div>
    );
};

export default Boxes;