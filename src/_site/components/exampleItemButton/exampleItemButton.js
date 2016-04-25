import titleCase from 'title-case';
import c from './ExampleItemButton.css';

export default class ExampleItemButton {
    set properties(props){
        this.exampleItem = props.exampleItem;
        this.example = props.example;
        this.linkExampleItem = document.createElement('a');
        this.label = this.exampleItem ? titleCase(this.exampleItem): 'N/A';

    }
    render(container) {
        this.linkExampleItem.id = this.exampleItem;
        this.linkExampleItem.className = c.item;
        this.linkExampleItem.innerHTML = this.label;
        container.appendChild(this.linkExampleItem);
    }
}