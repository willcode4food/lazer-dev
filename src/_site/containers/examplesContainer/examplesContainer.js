import c from './examplesContainer.css';
import { ExampleButton } from '../../components/exampleButton';

export default class ExamplesContainer {
    render(divRoot, examples = []) {
        let divContainer = document.createElement('div');

        divContainer.className = c.container;
        examples.map( (ex) => {
            let myBtn = new ExampleButton;
            myBtn.properties = {
                example: ex
            };
            myBtn.render(divContainer);
        });
        divRoot.appendChild(divContainer);
    }

}