// array.length, array.push, & index/element behavior quirks

// .length method returns the number of indecies in an array...

var animalArray = ['dog', 'cat', 'mouse', 'cheese'];

console.log(animalArray.length);
console.log(animalArray);
// 4  (the individual indicies are 0, 1, 2, 3)
// [ 'dog', 'cat', 'mouse', 'cheese' ]



// .push method best way to add something to the end of an array

animalArray.push('lion');

console.log(animalArray);
console.log(animalArray.length);

// [ 'dog', 'cat', 'mouse', 'cheese', 'lion' ]
// 5



// .length doesn't necessarily yield the number of properties in an array in javascript

animalArray[8] = 'wombat';

console.log(animalArray);
console.log(animalArray.length);
// 9
// [ 'dog', 'cat', 'mouse', 'cheese', , , , , 'wombat' ]
// only five properties here



animalArray.length = 11;

console.log(animalArray.length);
console.log(animalArray);
// 11
// [ 'dog', 'cat', 'mouse', 'cheese', , , , , 'wombat', ,  ]
// and still only five properties here too


// another way to add an item to an array:
animalArray[animalArray.length] = 'tiger';

console.log(animalArray);
console.log(animalArray.length);
//[animalArray.length] returns '11', so 'tiger' is begin assigned to index spot 11
// [ 'dog', 'cat', 'mouse', 'cheese', , , , , 'wombat', , , 'tiger' ]
// 12



// however, making .length smaller than the number of indicies will delete 
// indecies that number and larger
animalArray.length = 9;

console.log(animalArray);
console.log(animalArray.length);
// [ 'dog', 'cat', 'mouse', 'cheese', , , , , 'wombat' ]
// 9













