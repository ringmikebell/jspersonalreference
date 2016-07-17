// object inheritance

var candidate = {

	leftRight				: "unknown",
	popLib					: "unknown",
	modExtrm				: "unknown",
	amusingQuirk			: "unknown",
	nemesis					: "unknown",
	hasBadCombover			: null,
	gravitas				: 0,

	listDetails    			: function() {
		console.log(this.leftRight, this.popLib, this.modExtrm, this.amusingQuirk, this.nemesis, this.hasBadCombover, this.gravitas);
	}

};

// use Object.create ... other 

var trump = Object.create(candidate);
var clinton = Object.create(candidate);

trump.hasBadCombover = true;
trump.gravitas = 3;
trump.leftRight = "right";


trump.listDetails();

console.log(trump.hasBadCombover);




