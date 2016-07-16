// object methods

// methods are functions that are a property of an object.  when referring to a property in a function
// within the same object, use "this" instead of object's name.


var yogiBear = {

	name				: "Yogi",
	color				: "brown",
	food				: "pic-a-nic basket",
	residence			: "Jellystone",
	sidekick			: "Boo Boo",
	shitsInTheWoods		: true,
	antagonist			: "park ranger",

	//methods

	fleeRanger			:function(){
		console.log("Let's get outta here " + this.sidekick + "!");
	},


	stealPicnicBasket	:function(){
		console.log("I don't see the " + this.antagonist + ", grab the " + this.food + "!");
	},

	//combine methods

	eatAndRun			:function(){
		this.stealPicnicBasket();
		this.fleeRanger();
	}
};

// property retrieval

console.log(yogiBear.residence);
console.log(yogiBear.shitsInTheWoods);

// calling a method

yogiBear.eatAndRun();



