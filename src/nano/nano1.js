import Config from 'lazer/config/Config';
import Parent from 'lazer/config/settings/Parent';
import GameTitle from 'lazer/config/settings/GameTitle';
import State from 'lazer/config/settings/State';
import Game from 'lazer/game/nano/Game';

let game = new Game(
    Config(
        Parent('game'),
        GameTitle('BobVaders'),
        State({ preload, create, render })
    )
);

let image;

function preload () {

    this.load.path = 'assets/';
    this.load.image('phaser1');

}

function create () {

    for (let file of this.load.getLoadedFiles())
    {
        image = file.data;
    }

}

function render() {

    this.context.drawImage(image, 200, 100);

}
