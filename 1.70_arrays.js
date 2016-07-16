// arrays

// lists of objects, can be of the same or multiple types, is enclosed with [],
// and are indexed/referenced/accessed in numeric order...beginning at ZERO. 

var hereIsAnEmptyArray = [];

var arrayOfBeatles = [ 'John', "Paul", "Ringo", "George"];

var lotsOfBeatlesStuff = ['Lucy', 9, 'Strawberry Fields'];

console.log(arrayOfBeatles);
console.log(arrayOfBeatles[0]);
console.log(arrayOfBeatles[1]);
console.log(arrayOfBeatles[2]);
console.log(arrayOfBeatles[3]);



// array methods that are commonly used

//length - note the difference in the indicies 0, 1, 2, and 3... vs a length of 4.

console.log(arrayOfBeatles.length);

//push - adds to end of existing array

arrayOfBeatles.push("Stuart");


console.log(arrayOfBeatles);
console.log(arrayOfBeatles.length);



//pop - removes the last element from an array and returns it

arrayOfBeatles.pop();

// or 

var beatleStuff = lotsOfBeatlesStuff.pop();


console.log(arrayOfBeatles);
console.log(arrayOfBeatles.length);

console.log(beatleStuff);



//shift - removes the first element from an array an returns it

arrayOfBeatles.shift();

console.log(arrayOfBeatles);
console.log(arrayOfBeatles.length);

//unshift - adds element/s to beginning of array

arrayOfBeatles.unshift("John");
console.log(arrayOfBeatles);
console.log(arrayOfBeatles.length);

// many others, find at:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections



// follow the logic brain exercise


var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
    a[i][j] = new Array(4);
    	for (k = 0; k < 4; k++) {
    a[i][j][k] = "[" + i + "," + j + "," + k +"]";
	   }
  }
}

console.log(a);
