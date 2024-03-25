import React, { useState, useEffect } from 'react';

const InputBox = () => {
    return (
        <div className="w-1/2 border-black">
            <input type="text" />
            <textarea />
        </div>
    );
};

interface Correcao {
    palavra: string;
    correcao: string;
    explicacao: string;
}

const OutPutBox = ({ correcoes }: { correcoes: Correcao[] }) => {
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

const Boxes = () => {
    // Definição do estado correcoes utilizando o hook useState.
    const [correcoes, setCorrecoes] = useState<Correcao[]>([]);

    // Definição do efeito colateral utilizando o hook useEffect.
    useEffect(() => {
        const corrigirGramatica = async (texto: string) => {
            try {
                // Chamada à API do LanguageTool para verificar a gramática do texto fornecido.
                const response = await fetch("https://languagetool.org/api/v2/check", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `text=${encodeURIComponent(texto)}&language=pt-BR`,
                });

                // Extrai os dados da resposta da API.
                const data = await response.json();

                // Verifica se há correspondências (erros gramaticais) na resposta da API.
                if (data.matches && data.matches.length > 0) {
                    // Mapeia as correspondências para o formato da interface Correcao.
                    const correcoes: Correcao[] = data.matches.map((match: any) => ({
                        palavra: texto.substring(match.offset, match.offset + match.length),
                        //offset é a posição incial da palavra em relação ao texto.
                        correcao: match.replacements ? match.replacements[0].value : "N/A",
                        explicacao: match.message
                    }));
                    // Retorna o array de correções.
                    return correcoes;
                } else {
                    // Retorno vazio se n tiver correção.
                    return [];
                }
            } catch (error) {
                console.error("Erro ao chamar a API do LanguageTool:", error);
                return [];
            }
        };

        //Texto fixo enquanto não tem input.
        const texto = "amanha comer pao voú";

        // Chama a função corrigirGramatica com o texto fornecido.
        corrigirGramatica(texto)
            .then((correcoes) => {
                // Quando as correções são retornadas com sucesso, atualiza o estado correcoes com essas correções.
                setCorrecoes(correcoes);
            })
            .catch((error) => {
                console.error("Erro ao corrigir gramática:", error);
            });
    }, []); //Segundo parametro do use efect,para que a api só sejachamada uma vez.

    // passa correções para o componente OutPutBox.
    return (
        <div className="w-1/2 border-5">
            <InputBox />
            <OutPutBox correcoes={correcoes} />
        </div>
    );
};

export default Boxes;
