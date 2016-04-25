import c from './examplesContainer.css';
import { ExampleButton } from '../../components/exampleButton';

export default class ExamplesContainer {
    constructor(){
        this.examplesButtons = [];
    }
    render(divRoot, examples = []) {
        let divContainer = document.createElement('div');
        divContainer.id = 'examplesContainer';
        divContainer.className = c.container;
        let buttonsArr = this.examplesButtons;
        examples.map( (ex) => {
            let myBtn = new ExampleButton;
            myBtn.properties = {
                example: ex
            };
            buttonsArr.push(myBtn);
            myBtn.render(divContainer);
        });
        divRoot.appendChild(divContainer);
    }

}