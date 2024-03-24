import React from 'react';

const Buttons = () => {

    const textoCorrigido = () => {
        return "testando algum texto corrigido";
    };

    const baixarArquivoTexto = () => {
        const conteudo = textoCorrigido();
        const blob = new Blob([conteudo], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'texto_corrigido.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div>
            <button>Botão 1</button>
            <button>Botão 2</button>
            <button onClick={baixarArquivoTexto}>Botão 3</button>
        </div>
    );
};

export default Buttons;
