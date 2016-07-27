// array delete operator & .splice method

var roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];



// delete only deletes the element - not both the index and element associated with it.
// leaves value undefined

delete roygbiv[5];

console.log(roygbiv);
console.log(roygbiv[5]);
console.log(roygbiv.length);

// [ 'red', 'orange', 'yellow', 'green', 'blue', , 'violet' ]
// undefined
// 7 



// let's add indigo back in, even through its a dumb color...

roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(roygbiv);

// [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]



















