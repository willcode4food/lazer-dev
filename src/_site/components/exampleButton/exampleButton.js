import c from './ExampleButton.css';

export default class ExampleButton {
    constructor(){
        this.exampleLinks = [];
    }
    set properties(props){
        this.example = props.example;
        this.target = props.target ? props.target : 'div';
        this.dist = props.dist ? props.dist : 'js';
    }
    render(container) {
        if (!this.example) {
            return;
        }
        // use webpack to get a count of the number of tests
        let req = require('../../../' + this.example + '/index.js');

        let numTests = Object.keys(req).length;
        this.divBtnWrapper = document.createElement('div');
        this.divBtnWrapper.className = c.buttonWrapper;

        this.divExampleTotal = document.createElement('div');
        this.divExampleTotal.className = c.exampleTotal;
        this.divExampleTotal.innerHTML = numTests;

        this.linkExample = document.createElement('a');
        this.linkExample.id = this.example;
        this.linkExample.className = c.example;
        this.linkExample.innerHTML = this.example;

        this.divBtnWrapper.appendChild(this.divExampleTotal);
        this.divBtnWrapper.appendChild(this.linkExample);
        container.appendChild(this.divBtnWrapper);
    }
}