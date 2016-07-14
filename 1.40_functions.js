// functions

// functions are a set of instructions to be executed.
// organizes lists of instructions into groups that can be quickly called by a single function name

// syntax 1. declare it's a function and name it, 2. follow with parentheses - these hold parameters (also called arguments)
// that the function may require as inputs, 3. put all of the instructions into curly braces
var longName;

function addNumbers(firstNum, secondNum){
	console.log(firstNum + secondNum);
}

// to use the function:

addNumbers(5, 8);


// functions can have 0 or any number of parameters, but parentheses must be used even if 0 parameters are present

function aintGotNoParameters(){
	console.log("We don't need no stinkin' parameters")
}

aintGotNoParameters();

// scope - if you create variables inside of a function, they are local
// and only accessible inside of the function.  variables created outside of 
// functions "global" are acessible anywhere.

function containsLocalVariables(){
	var x = 1;
	var y = 12;
	var z = 3345234534553;
	console.log(x + y + z + " is a big number.");
	console.log("I have three local variables");

}

containsLocalVariables();

// add return in a function to return a value for future use

function fullName(first, last){
	var longName = first + ' "Bad-Ass-Coder" ' + last + "Bin Laden";
	console.log("See, it only prints to the console what I tell it, not the return value");
	return longName;
	
}

fullName("Paul", "O'Connor");


function calculatePriceIndiana(quantity, price){
	var tax = 1.07;
	var totalPrice = quantity * price * tax;
	return totalPrice;
};

calculatePriceIndiana(3, 11.95);

































