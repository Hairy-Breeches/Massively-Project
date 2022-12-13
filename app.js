
let massivelyElement = document.getElementsByTagName('ul').item(0).children.item(0).children.item(0);
massivelyElement.classList.add('bg-white');

let hamburgerButtonOne = document.getElementsByClassName('hamburger-button-one').item(0);
let hamburgerButtonTwo = document.getElementsByClassName('hamburger-button-two').item(0);
let menu = document.getElementsByClassName('menu').item(0);
let hamburgerMenu = document.getElementsByClassName('hamburger-menu').item(0);


//Event Listener for Hamburger Menu text
menu.addEventListener('click', () => {
    hamburgerMenu.classList.add('show');
})

//Event Listener for Hamburger Button One
hamburgerButtonOne.addEventListener('click', () => {
    hamburgerMenu.classList.add('show');

})

//Event Listener for Hamburger Button Two
hamburgerButtonTwo.addEventListener('click', () => {
    hamburgerMenu.classList.remove('show');
})