
//////////////////// 1.	Array Manipulation: ////////////////////////////////////////////////////

console.log('//////////////////// 1.	Array Manipulation:');

// a. Create an array named numbers containing the integers from 1 to 5.
let numbers = [1,2,3,4,5];

// b.  Add the number 6 to the end of the array.
numbers.push(6);
console.log('Added 6 at the end in the numbers array: ',numbers);

// c. Remove the first element of the array.
numbers.shift();
console.log('Removed the first element from numbers array: ',numbers);


// d. Reverse the array.
numbers.reverse();
console.log('Reversed numebrs array: ',numbers);


// e. Join the array elements into a string with a comma as the separator.
const comma_seperated_numbers = numbers.join(',');
console.log('String containing numbers array joined through commas: ',comma_seperated_numbers);


// f. Use the map function to create a new array (squaredNumbers) containing the square of each number in the numbers array.
let square_of_elements = [];

square_of_elements = numbers.map(function(element){
    return element * element;
});
console.log('Squared numbers array: ',square_of_elements);




//////////////////// 2.	String Manipulation: ////////////////////////////////////////////////////

console.log('//////////////////// 2.	String Manipulation:');

// a. Create a string variable named message with the value "Hello, World!".
const message = "Hello, World!";

// b. Extract and log the substring "Hello" from the message.
const substringHello = message.substring(0, 5);
console.log('Extracted Hello sub string: ',substringHello);

// c. Convert the entire string to uppercase.
const upperCaseMessage = message.toUpperCase();
console.log('Uppercased message string: ',upperCaseMessage);

// d. Check if the string contains the word "World" (case-insensitive).
const containsWorld = message.toLowerCase().includes("world");
console.log('Checked if message string contains the word "World" (case-insensitive): ',containsWorld);

// e. Replace "World" with your name in the string.
const replacedMessage = message.replace("World", "Mash-hood");
console.log('Replaced World with Mash-hood: ',replacedMessage);

// f. Use the map function to create an array of characters from the string.
const charArray = [...message].map(function(char) {
    return char;
});

console.log('An array of characters from the message string: ',charArray);




//////////////////// 3.	Math Operations: ////////////////////////////////////////////////////

console.log('//////////////////// 3.	Math Operations:');

// a. Calculate the square root of 25.
const squareRootOf25 = Math.sqrt(25);
console.log("Sqaure Root of 25: ", squareRootOf25);

// b. Generate a random number between 1 and 10 (inclusive).
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log('Generated Random Number: ',randomNum);

// c. Round 3.14159 to the nearest integer.
const roundedNumber = Math.round(3.14159);
console.log('Rounded off Number 3.14159 to the nearest integer: ',roundedNumber);





//////////////////// 4.	Set Operations: ////////////////////////////////////////////////////

console.log('//////////////////// 4.	Set Operations:');

// a. Create two sets, set1 and set2, each containing three unique elements.
const set1 = new Set([1,2,3]);
const set2 = new Set([3,5,6]);

// b. Calculate the union of set1 and set2.
const set1UnionSet2 = new Set([...set1, ...set2]);;
console.log('Union of set1 and set2: ',set1UnionSet2);

// c. Check if set1 is a subset of set2.
let isSubset = (set1, set2) => [...set1].every(val => set2.has(val));

let checkIsSubSet = isSubset(set1,set2);
console.log('Checked if set1 is a subset of set2: ',checkIsSubSet);

// d. Remove an element from set2.
set2.delete(3);
console.log('set2 after deleting value 3 from it: ',set2);

// Convert set1 to an array.
let arr = [...set1];
console.log('Array containig the converted set1',arr);




//////////////////// 5.	Map Operations: ////////////////////////////////////////////////////

console.log('//////////////////// 5.	Map Operations:');

// a. Create an array named originalArray containing at least three numbers.
let originalArray = [1,2,3];

// b. Use the map function to create a new array (doubledArray) containing each number doubled.
let doubledArray = originalArray.map(function(element){
    return element * 2;
});

console.log('doubledArray containing each number doubled: ',doubledArray);


