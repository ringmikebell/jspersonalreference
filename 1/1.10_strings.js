//Strings

// strings - essentially lines of text, can be created by placing characters inside " " or ' '

"This is a string"
'So is this'

"And this too - I like the math problem 4 + 8 a whole lot!"

//some symbols that modify/denote strings need to be escaped to appear in the finished string as regular text


'Did she say "Hello"?' // works
"Did she say \"Hello\"?" // works
//  "Did she say "Hello"?" // doesn't work

'That\'s nice!' //works
"That's nice!" //works
//  'That's nice!' // doesn't work




// strings may be combined via concatenation, numbers can be added to strings, & be sure to add in spaces, punctuation

var yearsWithoutAWorldSeriesWin = 107;
var team1 = "Cubs";
var team2 = "Yankess";

console.log("The " + team1 + " have went " + yearsWithoutAWorldSeriesWin + " without winning the World Series")

console.log("The " + team1 + " should schedule a consultation with the " + team2 + ".")

var newInflamatoryString = "If I cared about baseball, I would say the " + team2 + " are better than the " + team1 + "!";
console.log(newInflamatoryString);








