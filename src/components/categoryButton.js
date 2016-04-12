import styles from './CategoryButton.css';


export default class CategoryButton {
    set properties(props){
        this.category = props.category;
        this.target = props.target ? props.target : 'div';
        this.dist = props.dist ? props.dist : 'js';
    }
    render(container) {
        if (!this.category) {
            return;
        }
        console.log(styles);
        let req = require('../' + this.category + '/index.js');
        let numTests = Object.keys(req).length;

        let divBtnWrapper = document.createElement('div');
        let divExampleTotal = document.createElement('div');
        let linkExample = document.createElement('a');

        divBtnWrapper.id = this.category;
        divBtnWrapper.className = styles.buttonWrapper;

        divExampleTotal.className = styles.exampleTotal;
        divExampleTotal.innerHTML = numTests;

        linkExample.className = styles.example;
        linkExample.innerHTML = this.category;

        divBtnWrapper.appendChild(divExampleTotal);
        divBtnWrapper.appendChild(linkExample);
        container.appendChild(divBtnWrapper);
    }
}