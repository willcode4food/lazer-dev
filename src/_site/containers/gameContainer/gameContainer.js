import c from './gameContainer.css';

export default class GameContainer{
    constructor(divRoot){
        this.divContainer = document.createElement('div');
        this.divContainer.id='game';
        this.divContainer.className = c.container;
        this.divRoot = divRoot;
        this.divRoot.appendChild(this.divContainer);

    }
    clear(){
        let canvas = this.divContainer.getElementsByTagName('CANVAS')[0];
        if (canvas){
            this.divContainer.removeChild(canvas);
        }
    }
}