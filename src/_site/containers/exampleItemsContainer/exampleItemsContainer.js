import c from './exampleItemsContainer.css';
import { ExampleItemButton } from '../../components/exampleItemButton';

export default class ExampleItemsContainer {
    render(divRoot, exampleItem = '') {
        let divContainer = document.createElement('div');
        let req = require('../../../' + exampleItem + '/index.js');

        let exampleItems = Object.keys(req);

        divContainer.className = c.container;
        exampleItems.map( (ex) => {
            let myBtn = new ExampleItemButton;
            myBtn.properties = {
                exampleItem: ex
            };
            myBtn.render(divContainer);
        });
        divRoot.appendChild(divContainer);
    }

}