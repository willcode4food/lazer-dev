import titleCase from 'title-case';
import c from './ExampleItemButton.css';

export default class ExampleItemButton {
    set properties(props){
        this.exampleItem = props.exampleItem;

        this.label = this.exampleItem ? titleCase(this.exampleItem) : 'N/A';

    }
    render(container) {

        let linkExampleItem = document.createElement('a');
        linkExampleItem.className = c.item;
        linkExampleItem.innerHTML = this.label;
        container.appendChild(linkExampleItem);
    }
}