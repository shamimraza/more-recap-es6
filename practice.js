multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 2, 2);
// console.log(result);


function numbers(num1, num2 = 3) {
    const result1 = num1 + num2
    console.log(num1, num2, result1);
    return result1
}
const allResult = numbers(12);

const allName = `
  amar suner bangla
  ami tumk valo bashi
  and ro onaker
`;
// console.log(allName);

// Array element and push new array

const filterEvenLengthAndPush = arr => {
    const resultArray = [];
    arr.forEach(item => {
        if (item.length % 2 === 0) {
            resultArray.push(item);
        }
    });
    return resultArray;
};

const inputArray = ['apple', 'banana', 'orange', 'grapes', 'kiwi'];
const resultArray = filterEvenLengthAndPush(inputArray);
//   console.log(resultArray); 
// Output: ['banana', 'grapes']

// practice 3

const calculateAverageOfSquareSums = arr => {
    const sumOfSquares = arr.reduce((sum, num) => sum + num ** 2, 0);
    const average = sumOfSquares / arr.length;
    return average;
};

// Example usage
const numbersArray = [2, 3, 4, 5];
const average = calculateAverageOfSquareSums(numbersArray);
// console.log(average); 
// Output: 12.5
