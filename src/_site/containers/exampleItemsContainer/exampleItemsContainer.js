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
        this.exampleItemButtons.map((button)=>{
            this.divContainer.removeChild(button.linkExampleItem);
        });
        this.exampleItemButtons = [];
    }

}