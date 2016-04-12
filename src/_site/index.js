import { ExamplesContainer } from './containers';

let exContainer = new ExamplesContainer;
let divGame = document.querySelector('#game');
exContainer.render(divGame, ['array', 'canvas']);

