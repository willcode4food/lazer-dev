import { CategoryButton } from './components';

let myBtn = new CategoryButton;

myBtn.properties = {
    category: 'canvas'
};

myBtn.render(document.querySelector('#game'));
// document.querySelector('#game').appendChild(myBtn.render());

