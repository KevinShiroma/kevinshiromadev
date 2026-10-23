export default function initTextoDinamico() {
  const elementoTexto = document.getElementById('textoDinamico');
  if (!elementoTexto) return;

  const textos = [
    'Engenheiro de Dados 👷🎲',
    'Aspirante a Cozinheiro 👨‍🍳',
    'Corredor 🏃‍♂️'
  ];
  let indiceTextoAtual = 0;
  const intervaloDigitacao = 35;
  const intervaloApagar = 25;
  const pausaAposDigitar = 2200;
  const pausaAposApagar = 400;

  function escreverTexto() {
    elementoTexto.textContent = '';
    const textoAtual = textos[indiceTextoAtual];
    let i = 0;

    function adicionarCaractere() {
      if (i < textoAtual.length) {
        elementoTexto.textContent += textoAtual[i];
        i++;
        setTimeout(adicionarCaractere, intervaloDigitacao);
      } else {
        setTimeout(apagarTexto, pausaAposDigitar);
      }
    }

    adicionarCaractere();
  }

  function apagarTexto() {
    function removerCaractere() {
      const textoAtual = elementoTexto.textContent;
      if (textoAtual.length > 0) {
        elementoTexto.textContent = textoAtual.slice(0, -1);
        setTimeout(removerCaractere, intervaloApagar);
      } else {
        indiceTextoAtual = (indiceTextoAtual + 1) % textos.length;
        setTimeout(escreverTexto, pausaAposApagar);
      }
    }

    removerCaractere();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', escreverTexto);
  } else {
    escreverTexto();
  }
}
