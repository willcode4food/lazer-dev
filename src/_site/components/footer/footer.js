import c from './footer.css';

export default class Footer {
    constructor(divRoot){
        this.divRoot = divRoot;
        this.divFooter = document.createElement('div');
        this.divFooter.id = 'footer';
        this.divFooter.className = c.footer;
        this.divFooter.innerHTML = 'Examples - @photonstorm';
        this.divRoot.appendChild(this.divFooter);

    }
}