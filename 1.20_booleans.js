// booleans, or bools if you're cool.  true/false.

// either set it directly:

var ghostsAreReal = false;
var isNeilDegrasseTysonSmart = true;
var fortytwo = true;

console.log(isNeilDegrasseTysonSmart);

// or they be the result of comparisons/evaluations, etc
// operators: <  <=  > >=  ==  !=  ===  &&  ||

5 > 3;
3 < 2;

var experiment = 8 <= 4;
console.log(experiment);

// use && as "and", || as "or"

var isTPInStall = true;
var isStallClean = true;
var stallDoorLockWorks = false;
var stallHasFunGraffiti = false;


console.log(isStallClean && isTPInStall);
console.log(isStallClean && stallDoorLockWorks);


console.log(isTPInStall || stallDoorLockWorks);
console.log(stallDoorLockWorks || stallHasFunGraffiti);

// operators  =   !=   ==   ===   

var littlePigsString = "3"; //  the = assigns a value
var littlePigsInteger = 3; // and here too
var countOfWolves = 1; // here too...

console.log(littlePigsInteger == littlePigsString); //  the == compares value only
console.log(littlePigsInteger === littlePigsString); /// the === compares value and type, most safe to use

console.log(littlePigsInteger != countOfWolves); // results in true...it is true that the number of pigs and wolves is not equal














