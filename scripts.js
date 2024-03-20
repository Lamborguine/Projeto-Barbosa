function abrirModal(modalname) {
  document.getElementById(modalname).style.display = 'block';
}

function fecharModal(modalname) {
  document.getElementById(modalname).style.display = 'none';
}

function exibirModalConfirmacao() {
  fecharModal('modal-download');
  document.getElementById('modal-download-confirmacao').style.display = 'block';

  setTimeout(function () {
      document.getElementById('modal-download-confirmacao').style.display = 'none';
  }, 2000);
}

document.getElementById('btnAbrirModalUpload').addEventListener('click', () => abrirModal('modal-upload'));
document.getElementById('btnAbrirModalDownload').addEventListener('click', () => abrirModal('modal-download'));

// Adicionar um ouvinte de evento ao botão de formatar texto
const btnFormatarTexto = document.getElementById('btnFormatarTexto');
btnFormatarTexto.addEventListener('click', corrigirGramatica);

async function corrigirGramatica() {
  const texto = document.getElementById('entrada').value;
  const resultadoElemento = document.getElementById('resultado');

  try {
      const response = await fetch("https://languagetool.org/api/v2/check", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `text=${encodeURIComponent(texto)}&language=pt-BR`,
      });

      const data = await response.json();

      if (data.matches && data.matches.length > 0) {
          const correcoes = data.matches.map(match => {
              return {
                  mensagem: match.message,
                  correcao: match.replacements ? match.replacements[0].value : "N/A",
                  offset: match.offset,
                  comprimento: match.length,
              };
          });

          // Exibindo as correções
          const resultado = correcoes.map(correcao => {
              return `${correcao.mensagem} (Correção sugerida: ${correcao.correcao})`;
          }).join('\n');

          resultadoElemento.innerHTML = resultado;

          // Reescrever a frase corrigida manualmente
          const fraseCorrigida = correcoes.reduce((frase, correcao) => {
              return frase.substring(0, correcao.offset) + correcao.correcao + frase.substring(correcao.offset + correcao.comprimento);
          }, texto);

          resultadoElemento.innerHTML += `<br><br>Frase Corrigida: ${fraseCorrigida}`;
      } else {
          resultadoElemento.textContent = "Nenhum erro encontrado.";
      }
  } catch (error) {
      console.error("Erro ao chamar a API do LanguageTool:", error);
      resultadoElemento.textContent = "Erro ao chamar a API do LanguageTool. Verifique sua conexão ou tente novamente mais tarde.";
  }
}
