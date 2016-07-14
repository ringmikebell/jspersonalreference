// conditionals

// controls the flow - "flow control" through a series of conditions with if, else if, else.  
// switch can be used in rare circumstances.


var isTPInStall = true;
var isStallClean = true;
var stallDoorLockWorks = false;
var stallHasFunGraffiti = false;

// when only using if...if the condition is true - "then do this stuff in the { }" is implied.  
// if false, nothing happens.

if(isTPInStall && isStallClean) {
	console.log("Yippee!  I'll take this one!")
};

if(isStallClean && stallDoorLockWorks) {
	console.log("Yippee!  I'll take this one!")
};

if(!isStallClean) {  // ! means "is not", will return false in this case
	console.log("I'm not sitting in there!")
};


// if a particular behavior is desired when a condition is false, we use "else"

isStallClean = false;

if(isTPInStall && isStallClean) {
	console.log("Yippee!  I'll take this one!")
} else {
	console.log("I'd rather use a tree and poison ivy, thanks")
};

// if there are more than two conditions/behaviors, use "else if" to toggle through condition.  


var bedroomTemp = 77;

if(bedroomTemp >= 55) {
	console.log("It's freezing in here!!")
} else if(bedroomTemp > 55 && < 66) {
	console.log("Get me a blanket, my toes are cold!")
} else if(bedroomTemp > 65 && < 76) {
	console.log("It's perfect in here.")
} else if(bedroomTemp > 75 && < 86){
	console.log("Get a fan")
} else if(bedroomTemp > 85 && < 100) {
	console.log("Turn the bloody AC on!")
} else {
	console.log("I'mmmmm meeeelllllttinnnnngg")
}


// switch - use when comparing a single condition.  reads easier and compiles faster than long 
// chain of if else statements

var type = 'coke';
var drink;

switch(type) {
case 'coke':
  drink = 'Coke';
  break;
case 'pepsi':
  drink = 'Pepsi';
  break;
  case 'mountain dew':
  drink = 'Lion Piss';
  break;
  case 'fanta':
  drink = 'Fanta';
  break;
  case 'absinthe':
  drink = 'Absinthe';
  break;
default:
  drink = 'Unknown drink!';
}
console.log(drink); // 'Coke'







