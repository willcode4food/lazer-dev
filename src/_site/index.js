/**
 * index.js - Renders the containers for each section of the page
 *            Also acts as a controller to coordinate actions and data
 *            between different components and containers
 */
import { ExamplesContainer } from './containers/examplesContainer';
import { ExampleItemsContainer } from './containers/exampleItemsContainer';
import { ExampleItemButton } from './components/exampleItemButton';
import { GameContainer } from './containers/gameContainer';
import { Footer } from './components/footer';

let exArray =['array','cache','canvas','canvasgraphics', 'canvasshapes'];

// Create the root element to graft the rest of the app onto
let divGame = document.querySelector('#lazer-dev');

// Render the containers
let gmContainer = new GameContainer(divGame);
let exItemContainer = new ExampleItemsContainer(divGame);
let exContainer = new ExamplesContainer();

sessionStorage.example = null;


const initExampleItem = (e) => {
    let exampleItemName = e.srcElement.id;
    let req = require('../' + sessionStorage.example + '/index.js');
    let exampleItem = req[exampleItemName];

    gmContainer.clear();
    exampleItem();
};
// define the event handler to allow the example items button to get get updated
// when a example buttonis clicked
const updateExampleItems = (e) => {
    let example = e.srcElement.id;
    sessionStorage.example = e.srcElement.id;
    // using webpack require to gather the modules
    let req = require('../' + example + '/index.js');
    // create a list of example item modules
    let exampleItems = Object.keys(req);
    // reset the list of example item buttons
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

    exItemContainer.exampleItemButtons.map((button) => {
        button.linkExampleItem.addEventListener('click', initExampleItem, false);
    });

};

exContainer.render(divGame, exArray);
let exFooter = new Footer(divGame);

// add event handlers for the container to re-render the appropriate list of
// examples.
exContainer.examplesButtons.map((button) => {
    button.linkExample.addEventListener('click', updateExampleItems, false);
});