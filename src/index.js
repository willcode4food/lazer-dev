import { CategoryButton } from './components';

let MyCatButton = document.registerElement('category-button', CategoryButton);

let myBtn = new MyCatButton;

myBtn.properties = {
    category: 'canvas'
};

document.querySelector('#game').appendChild(myBtn);

