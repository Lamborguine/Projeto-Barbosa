import React from 'react';

const Buttons = () => {

    return (
        <div className="my-10 w-full grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-4">
            <div className="justify-self-center">
                <button
                    className="flex border-2 border-black hover:bg-gray-200 font-bold py-4 px-4 rounded-lg">
                    <img src={"/baixar.png"} alt="Baixar" className="h-6 w-6 inline-block mr-3 transform rotate-180" />
                    <p>Upload de Arquivo</p>
                </button>
            </div>
            <div>
                <button
                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-7 rounded-lg" >
                    Formatar Texto
                </button>
            </div>
            <div className="justify-self-center">
                <button
                    className="flex border-2 border-black hover:bg-gray-200 font-bold py-4 px-4 rounded-lg">
                    <img src={"/baixar.png"} alt="Baixar" className="h-6 w-6 inline-block mr-3" />
                    <p>Download de Arquivo</p>
                </button>
            </div>
        </div>
    );
};

export default Buttons;