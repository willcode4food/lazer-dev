import { array } from 'lazer/utils';

const { RotateLeft } = array;

const array14rotateLeftMany = () => {
	let data = [
		'Acorn Atom', 'BBC Micro', 'Electron', 'BBC Master', 'Acorn Archimedes',
		'A7000', 'CPC 464', '464 Plus', 'PCW', 'PC-1512', 'Imagination Machine',
		'Apple', 'Atari 400', 'Atari ST', 'Atari TT', 'Bally Brain', 'Lynx', 'MSX',
		'Coleco Adam', 'Sord M5', 'PET', 'VIC-20', 'Commodore 64', 'Plus/4', 'Amiga' ];

	console.log(data);

	let element = RotateLeft(data, 8);

	console.log('element that was moved last', element);

	console.log(data);
};

export default array14rotateLeftMany;