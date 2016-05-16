import { Loader } from 'lazer/loader';
import { Cache } from 'lazer/cache';

const cache1 = () => {
	let loader = new Loader();

	loader.image('logo', 'assets/phaser1.png');

	loader.start().then(files => loaderComplete(files));
};


function loaderComplete (files) {
	let cache = Cache();

	for (let file of files)
	{
		cache.add(file.key, file.data);
	}

	console.log(cache.get('logo'));

	// game.add.sprite(100, 200, 'level1:background,level2:background,level3:background');
	// game.add.sprite(100, 200, 'level1|background');
	// game.add.sprite(100, 200, 'level1/background');
	// game.add.sprite(100, 200, 'level1>background');

}

export default cache1;