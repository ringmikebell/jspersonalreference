// while loops

// purpose is to keep executing a function as long as a certain condition is true.  keeps code dry.
// to execute a function twenty times...instead of this:

function loopy(){
	console.log("inefficiently typin' like crazy");
}

loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();
loopy();


// do this:

var sloopy = 0;
        
while (sloopy < 20) {
    console.log("sloopy hang on - we're efficiently looopin' like crazy!");
 
    sloopy++;
}


// do-while loops

// difference vs a while loop is that do-while loops gaurantee the body of code will be executed at 
// least once.  the condition for repeating the statement is at the end of the loop, 
// instead of preceding it.

do {
	console.log()

}

// to avoid - infinite loops.  if you write a while-loop conditional that never becomes false,
// the loop will run forever.  In JS, there is a built in functionality that detects and can halt
// such ocurances after a bit, but relying on this should be avoided.














