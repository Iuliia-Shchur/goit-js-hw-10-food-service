import cardMarkup from '../templates/card-markup.hbs';
import menuItems from '../menu.json';

const menuList = document.querySelector('.js-menu');

function createMenuItem () {
    return menuItems.map(cardMarkup).join("");
}

const menuListMarkup = createMenuItem ();
menuList.insertAdjacentHTML('beforeend', menuListMarkup);
