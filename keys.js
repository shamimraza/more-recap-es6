const pair1 = {
    name: 'Rabi khan',
    age: 32,
    color: 'blue'
}
const pair = Object.keys(pair1)
// console.log(pair);

const pair2 = Object.values(pair1);
// console.log(pair2);

const pair3 = Object.entries(pair1)
console.log(pair3);
//  dimensional Array
// [
//     ['name', 'Rabi khan'], ['age', 32], ['color', 'blue']
// ]

// delete pair1.isCleaned;

// Object.freeze(pair1)
pair1.source = 'bangladesh'
console.log(pair1);
pair2.s
