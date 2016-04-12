import styles from './ExampleButton.css';


export default class ExampleButton {
    set properties(props){
        this.example = props.example;
        this.target = props.target ? props.target : 'div';
        this.dist = props.dist ? props.dist : 'js';
    }
    render(container) {
        if (!this.example) {
            return;
        }
        let req = require('../../' + this.example + '/index.js');
        let numTests = Object.keys(req).length;

        let divBtnWrapper = document.createElement('div');
        let divExampleTotal = document.createElement('div');
        let linkExample = document.createElement('a');

        divBtnWrapper.id = this.example;
        divBtnWrapper.className = styles.buttonWrapper;

        divExampleTotal.className = styles.exampleTotal;
        divExampleTotal.innerHTML = numTests;

        linkExample.className = styles.example;
        linkExample.innerHTML = this.example;

        divBtnWrapper.appendChild(divExampleTotal);
        divBtnWrapper.appendChild(linkExample);
        container.appendChild(divBtnWrapper);
    }
}