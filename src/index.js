import { CategoryButton } from './components';

let MyCatButton = document.registerElement('category-button', CategoryButton);

let myBtn = new MyCatButton;

myBtn.properties = {
    category: 'canvas'
};

myBtn.render(document.querySelector('#game'));
// document.querySelector('#game').appendChild(myBtn.render());

