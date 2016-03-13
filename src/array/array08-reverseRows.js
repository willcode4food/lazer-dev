import { MatrixToString, ReverseRows } from 'lazer';

export default function array08reverseRows (){
	let small = [
	    [ 1, 1, 1, 1, 1, 1 ],
	    [ 2, 0, 0, 0, 0, 4 ],
	    [ 2, 0, 1, 2, 0, 4 ],
	    [ 2, 0, 3, 4, 0, 4 ],
	    [ 2, 0, 0, 0, 0, 4 ],
	    [ 3, 3, 3, 3, 3, 3 ]
	];

	console.log('Before Reverse Rows');

	console.log(MatrixToString(small));

	let t = ReverseRows(small);

	console.log('After Reverse Rows');

	console.log(MatrixToString(t));
}