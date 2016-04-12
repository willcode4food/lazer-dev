import styles from './categoriesContainer.css';
import { CategoryButton } from '../components';

export default class CategoryContainer {
    render(categories = []){
        let divContainer = document.createElement('div');

        divContainer.className = styles.clr;
        categories.map((cat) => {
            let myBtn = new CategoryButton;
            myBtn.properties = {
                category: cat
            };
            myBtn.render(divContainer);
        });
    }

}