export default function initmenuHamburguer() {
  const menuHamburguer = document.querySelector("[data-menu='button']");
  const abreMenu = document.querySelector("[data-menu='lista']");

  if (!menuHamburguer || !abreMenu) return;

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const ativo = abreMenu.classList.toggle('ativo');
    menuHamburguer.classList.toggle('ativo');
    menuHamburguer.setAttribute('aria-expanded', ativo);
  }

  function fecharMenu() {
    abreMenu.classList.remove('ativo');
    menuHamburguer.classList.remove('ativo');
    menuHamburguer.setAttribute('aria-expanded', 'false');
  }

  menuHamburguer.addEventListener('click', toggleMenu);

  // Fecha ao clicar em qualquer link de navegação
  const links = abreMenu.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', fecharMenu);
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (event) => {
    if (
      !menuHamburguer.contains(event.target) &&
      !abreMenu.contains(event.target)
    ) {
      fecharMenu();
    }
  });
}
