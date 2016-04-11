class CategoryButton extends HTMLElement {
    constructor() {
        super();
    }

    set properties(props){
        this.category = props.category;
        this.target = props.target ? props.target : 'div';
        this.dist = props.dist ? props.dist : 'js';
    }
     // Fires when an instance was removed from the document.
    detachedCallback() {}

    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {}

    // Fires when an instance was inserted into the document.
    attachedCallback() {
        console.log('yo');
        if (!this.category) {
            return;
        }

        let req = require('../' + this.category + '/index.js');
        console.log(req);
        let numTests = Object.keys(req).length;

        console.log(numTests);
    }
    // Fires when an instance of the element is created.
    createdCallback() {}

}

export default CategoryButton;