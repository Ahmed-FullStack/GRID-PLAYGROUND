const sideBar = document.querySelector('.nav__list');
const humBurgerMenu = document.querySelector('.ham');

humBurgerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('appear');
})