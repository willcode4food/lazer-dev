import styles from './examplesContainer.css';
import { ExampleButton } from '../components';

export default class ExamplesContainer {
    render(divRoot, examples = []){
        let divContainer = document.createElement('div');

        divContainer.className = styles.clr;
        examples.map((ex) => {
            let myBtn = new ExampleButton;
            myBtn.properties = {
                example: ex
            };
            myBtn.render(divContainer);
        });
        divRoot.appendChild(divContainer);
    }

}