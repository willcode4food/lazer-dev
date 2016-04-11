import { MatrixToString, ReverseColumns } from 'lazer';

export default function array09reverseCols (){
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
}