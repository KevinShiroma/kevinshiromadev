export default function initAtivaServico() {
  document.addEventListener('DOMContentLoaded', function () {
    var filtros = document.querySelectorAll('.filtro');
    var cards = document.querySelectorAll('.card-portfolio');

    filtros.forEach(function (filtro) {
      filtro.addEventListener('click', function () {
        // Se o filtro clicado já está ativo, não faz nada
        if (filtro.classList.contains('ativo')) {
          return;
        }

        // Remove a classe 'ativo' de todos os filtros
        filtros.forEach(function (f) {
          f.classList.remove('ativo');
        });

        // Adiciona a classe 'ativo' ao filtro clicado
        filtro.classList.add('ativo');

        // Filtra os cards com base no filtro selecionado
        var filtroSelecionado = filtro.dataset.filter;

        cards.forEach(function (card) {
          // Mostra apenas os cards que têm a classe correspondente ao filtro selecionado
          if (card.classList.contains(filtroSelecionado)) {
            card.style.display = 'grid';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Ativa o filtro "front-end" ao iniciar a página
    filtros[0].click();
  });
}
