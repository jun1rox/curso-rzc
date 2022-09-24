const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu-lateral');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
});