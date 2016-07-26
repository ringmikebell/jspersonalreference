// interating over arrays

// again, arrays are objects.  if you use a for-in loop to access the elements, you may not
// get the those elements in numerical order according to their indecies.

// so, use a conventional for loop:


var maslowNeeds = ['internet connection', 'physiological', 'safety', 'love & belonging', 'esteem', 'self-actualization'];

var i;
for (i = 0; i < maslowNeeds.length; i++) {
	console.log(maslowNeeds[i]);
}

// internet connection
// physiological
// safety
// love & belonging
// esteem
// self-actualization





