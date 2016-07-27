// commonly used array methods

var roy = ['red', 'orange', 'yellow'];
var gee = ['green'];
var biv = ['blue', 'indigo', 'violet'];
var roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var beatles = ['paul', 'ringo', 'john', 'george'];
var homes = [ 'huron', 'ontario', 'michigan', 'erie', 'superior' ];
var romanNumerals = ['I', "II", "III", "IV", "V", "VI", "VII"];



//  CONCATENATION

var almostCompleteRainbow = biv.concat(roy);

console.log(almostCompleteRainbow);

// [ 'green', 'blue', 'indigo', 'violet', 'red', 'orange', 'yellow' ]



// or, concatenating three arrays:

var completeRainbow = roy.concat(gee, biv);
console.log(completeRainbow);

// [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]



// or, adding values to an array:
var warmColors = roy.concat('peach', 'burnt orange');
console.log(warmColors);

// [ 'red', 'orange', 'yellow', 'peach', 'burnt orange' ]



// RETURN STRING - returns string

var stringRainbow = completeRainbow.toString();
console.log(stringRainbow);

// red,orange,yellow,green,blue,indigo,violet


// JOIN - returns string with elements joined by a separator that's passed in

var StringSpacedRainbow = completeRainbow.join(', ');
console.log(StringSpacedRainbow);

// red, orange, yellow, green, blue, indigo, violet


// POP - removes last element from an array

var deadBeatle = beatles.pop();
console.log(deadBeatle);
console.log(beatles);

// george
// [ 'paul', 'ringo', 'john' ]



// SHIFT - removes first element of an array and shifts all elements
// down one index place

beatles.shift();
console.log(beatles);
console.log(beatles[1]);

// [ 'ringo', 'john', 'dee snyder', 'pavarotti', 'eminem' ]
// john



// PUSH - adds an element to the end of an array

beatles.push("dee snyder");
console.log(beatles);

// or more than one item at a time:

beatles.push("pavarotti", "eminem");
console.log(beatles);

// [ 'paul', 'ringo', 'john', 'dee snyder' ]
// [ 'paul', 'ringo', 'john', 'dee snyder', 'pavarotti', 'eminem' ]



// UNSHIFT - adds new element/s to beginning of an array and shifts all elements
// one index place higher

beatles.unshift("johnny cash");
console.log(beatles);
console.log(beatles[1]);

// [ 'johnny cash', 'ringo', 'john', 'dee snyder', 'pavarotti', 'eminem' ]
// ringo


// SPLICE - we can do surgery to arrays.  we can simply add or remove items at a given
// index/indicies, or we can transplant new elements



// REMOVING ONLY - if you only want to decrement, or to delete both the index and its associated element.
// .splice takes two arguments. the first is the first index/element you want to delete, and the 
// second arugment is how many succeeding indecies/elements you want to delete.

// so...screw it, let's make rainbows only have four colors...
console.log(roygbiv);
roygbiv.splice(1, 3);
console.log(roygbiv);

console.log(roygbiv.length);
console.log(roygbiv[1]);

// [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]
// [ 'red', 'blue', 'indigo', 'violet' ]

// 4
// blue - the second color of our freak rainbow is now blue...



// ADDING ONLY - the first argument is again the first element you want to act upon;
// the second is still how many items you want to delete - zero in this case.  then, list
// all of the elements you want to add to the array


// so, let's get our rainbow back to normal...

console.log(roygbiv);
roygbiv.splice(1, 0, 'orange', 'yellow', 'green');
console.log(roygbiv);

// [ 'red', 'blue', 'indigo', 'violet' ]
// [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]



// REMOVING AND ADDING - let's start at index 1, remove two elements (at indecies 1 & 2 - orange and yellow), 
// and add in four more colors.

console.log(roygbiv);
roygbiv.splice(1, 2, 'grey', 'brown', 'black', 'mauve');
console.log(roygbiv);

// [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]
// [ 'red','grey','brown','black','mauve','green','blue','indigo','violet' ]



// REVERSE - "reverses" an array...makes the first element the last, and the last the first, etc.

console.log(homes);
homes.reverse();
console.log(homes);

// [ 'huron', 'ontario', 'michigan', 'erie', 'superior' ]
// [ 'superior', 'erie', 'michigan', 'ontario', 'huron' ]



// SLICE - nondestructively retrieves and returns elements from an array.  first argument is the beginning index,
// second item is an index one place greater than the indecies sliced out.  here, we are retrieving the elements
// at indecies 3 & 4.  those elements are stored in a shallow copy called slicedDicedItems.  original array of
// romanNumerals is left unchanged.

console.log(romanNumerals);
var slicedDicedItems = romanNumerals.slice(3, 5);

console.log(slicedDicedItems);
console.log(romanNumerals);

// [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII' ]

// [ 'IV', 'V' ]
// [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII' ]









var mixedArray = ['aa', 'bb', 'a', 'c', 'cc', 3, 4, 10];
mixedArray.sort();
console.log(mixedArray);











































