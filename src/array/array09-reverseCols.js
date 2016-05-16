import { array } from 'lazer/utils';

const { MatrixToString, ReverseColumns } = array.matrix;

const array09reverseCols = () => {
	let small = [
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6 ]
	];

	console.log('Before Reverse');

	console.log(MatrixToString(small));

	let t = ReverseColumns(small);

	console.log('After Reverse');

	console.log(MatrixToString(t));
};

export default array09reverseCols;