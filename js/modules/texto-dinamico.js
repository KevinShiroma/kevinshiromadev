export default function initTextoDinamico() {
  const textos = [
    'Engenheiro de Dados 👷🎲',
    'Web Developer 💻',
    'Aspirante a Cozinheiro 👨‍🍳',
    'Corredor 🏃‍♂️ '
  ];
  let indiceTextoAtual = 0;

  function escreverTexto() {
    const elementoTexto = document.getElementById('textoDinamico');
    elementoTexto.textContent = '';

    const textoAtual = textos[indiceTextoAtual];
    const intervaloDigitacao = 30; // Ajuste conforme necessário

    let i = 0;

    function adicionarCaractere() {
      elementoTexto.textContent += textoAtual[i];
      i++;

      if (i === textoAtual.length) {
        setTimeout(apagarTexto, 2000);
      } else {
        setTimeout(adicionarCaractere, intervaloDigitacao);
      }
    }

    adicionarCaractere();
  }

  function apagarTexto() {
    const elementoTexto = document.getElementById('textoDinamico');
    const intervaloApagar = 30; // Ajuste conforme necessário

    function removerCaractere() {
      const textoAtual = elementoTexto.textContent;
      elementoTexto.textContent = textoAtual.slice(0, -1);

      if (textoAtual.length === 0) {
        indiceTextoAtual = (indiceTextoAtual + 1) % textos.length;
        setTimeout(escreverTexto, 500);
      } else {
        setTimeout(removerCaractere, intervaloApagar);
      }
    }

    removerCaractere();
  }

  document.addEventListener('DOMContentLoaded', escreverTexto);
}
