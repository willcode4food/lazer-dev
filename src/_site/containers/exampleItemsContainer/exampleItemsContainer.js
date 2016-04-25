import c from './exampleItemsContainer.css';

export default class ExampleItemsContainer {
    constructor(divRoot){
        this.divRoot = divRoot;
        this.divContainer = document.createElement('div');
        this.divContainer.id = 'exampleItemsContainer';
        this.divContainer.className = c.container;
        this.divRoot.appendChild(this.divContainer);
        this.exampleItemButtons = [];
    }
    clear(){
        let containerDiv = this.divContainer;
        this.exampleItemButtons.map((button)=>{
            containerDiv.removeChild(button.linkExampleItem);
        });
        this.exampleItemButtons = [];
    }

}