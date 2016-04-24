import { ExamplesContainer } from './containers/examplesContainer';
import { ExampleItemsContainer } from './containers/exampleItemsContainer';

let exContainer = new ExamplesContainer;
let exItemContainer = new ExampleItemsContainer;
let exArray =['array','cache','canvas','canvasgraphics', 'canvasshapes'];

let divGame = document.querySelector('#game');

exItemContainer.render(divGame, 'array');
exContainer.render(divGame, exArray);
