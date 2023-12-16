export default function initAtivaServico() {
  document.addEventListener('DOMContentLoaded', function () {
    // Obtém todos os elementos com a classe "servicos-portfolio span"
    var elementosPortfolio = document.querySelectorAll(
      '.servicos-portfolio span',
    );

    // Adiciona um evento de clique a cada elemento
    elementosPortfolio.forEach(function (elemento) {
      elemento.addEventListener('click', function () {
        // Se o elemento clicado já está ativo e é o único ativo, não faz nada
        if (
          elemento.classList.contains('ativo') &&
          document.querySelectorAll('.servicos-portfolio span.ativo').length ===
            1
        ) {
          return;
        }

        // Alterna a classe 'ativo' do elemento clicado
        elemento.classList.toggle('ativo');
      });
    });

    // Adiciona a classe 'ativo' ao primeiro span ao iniciar a página
    var primeiroElemento = elementosPortfolio[0];
    primeiroElemento.classList.add('ativo');
  });
}
