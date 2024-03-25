import { C } from '@react-symbols/icons';
import React from 'react';

interface Correcao {
    palavra: string;
    correcao: string;
    explicacao: string;
}

interface BoxesProps {
    handleInputChange: (input: string) => void;
    inputValue: string;
    correcoes: Correcao[];
}

interface InputBoxProps {
    handleInputChange: (input: string) => void;
    inputValue: string;
}

interface OutPutBoxProps {
    correcoes: Correcao[];
}

const InputBox: React.FC<InputBoxProps> = ({ handleInputChange, inputValue }) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        handleInputChange(event.target.value);
    };

    return (
        <div className="w-1/2 border-black">
            <input type="text" value={inputValue} onChange={handleChange} />
            <textarea />
        </div>
    );
};

const OutPutBox: React.FC<OutPutBoxProps> = ({ correcoes }) => {
    return (
        <div>
            <h2>Correções:</h2>
            <ul>
                {correcoes.map((correcao, index: number) => (
                    <li key={index}>
                        Palavra: {correcao.palavra}, Correção: {correcao.correcao}, Explicação: {correcao.explicacao}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Boxes: React.FC<BoxesProps> = ({ handleInputChange, inputValue, correcoes }) => {

    return (
        <div className="w-1/2 border-5">
            <InputBox handleInputChange={handleInputChange} inputValue={inputValue} />
            <OutPutBox correcoes={correcoes} />
        </div>
    );
};

export default Boxes;
