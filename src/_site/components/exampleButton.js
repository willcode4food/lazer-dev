import c from './ExampleButton.css';


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
        console.log(this.example);
        // use webpack to get a count of the number of tests
        let req = require('../../' + this.example + '/index.js');

        let numTests = Object.keys(req).length;

        let divBtnWrapper = document.createElement('div');
        let divExampleTotal = document.createElement('div');
        let linkExample = document.createElement('a');

        divBtnWrapper.id = this.example;
        divBtnWrapper.className = c.buttonWrapper;

        divExampleTotal.className = c.exampleTotal;
        divExampleTotal.innerHTML = numTests;

        linkExample.className = c.example;
        linkExample.innerHTML = this.example;

        divBtnWrapper.appendChild(divExampleTotal);
        divBtnWrapper.appendChild(linkExample);
        container.appendChild(divBtnWrapper);
    }
}