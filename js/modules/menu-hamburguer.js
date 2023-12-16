export default function initmenuHamburguer() {
  const menuHamburguer = document.querySelector("[data-menu='button']");
  const abreMenu = document.querySelector('.menu-nav');

  function ativaMenu() {
    abreMenu.classList.toggle('ativo');
    menuHamburguer.classList.toggle('ativo');
  }

  menuHamburguer.addEventListener('click', ativaMenu);
}
