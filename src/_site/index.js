import { ExamplesContainer } from './containers/examplesContainer';
import { ExampleItemsContainer } from './containers/exampleItemsContainer';
import { ExampleItemButton } from './components/exampleItemButton';


let exArray =['array','cache','canvas','canvasgraphics', 'canvasshapes'];

let divGame = document.querySelector('#game');
let exItemContainer = new ExampleItemsContainer(divGame);
let exContainer = new ExamplesContainer();

// event handler to allow the example items button to get get updated
// when a example buttonis clicked
const updateExampleItems = (e) => {
    let example = e.srcElement.id;
    let req = require('../' + example + '/index.js');
    let exampleItems = Object.keys(req);

    exItemContainer.clear();

    exampleItems.map( (exampleItem) => {
        let myBtn = new ExampleItemButton;
        myBtn.properties = {
            exampleItem,
            example
        };
        myBtn.render(exItemContainer.divContainer);
        exItemContainer.exampleItemButtons.push(myBtn);
    });
};

exContainer.render(divGame, exArray);

// add event handlers for the container to re-render the appropriate list of
// examples
exContainer.examplesButtons.map((button) => {
    button.linkExample.addEventListener('click', updateExampleItems, false);
});
