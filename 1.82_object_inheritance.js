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
	},

	makeIgnorantComment		: function() {
		var nonWhiteEthnicities = ["Hispanic", "Inuit", "Persian", "Asian", "Indian", "Black", "Arabic", "Gypsy"];
		var respectedOccupations = ["judges", "senators", "congressmen", "bankers", "lawyers", "professors", "doctors", "architects", "teachers", "generals"];
		var groupDescriptors = ["gay", "female", "lesbian", "cathoic", "muslim", "jewish", "amish", "handicapped", "hindu", "buddhist"];
		var disparagingAdjective = ["broke", "liberal", "establishment", "stupid", "dumb", "loser", "dog", "little", "foolish", "failed", "clown", "hippy", "midget"];
		var randNonWhiteEthnicities = nonWhiteEthnicities[Math.floor(Math.random() * nonWhiteEthnicities.length)];
		var randrespectedOccupations = respectedOccupations[Math.floor(Math.random() * respectedOccupations.length)];
		var randGroupDescriptors = groupDescriptors[Math.floor(Math.random() * groupDescriptors.length)];
		var randDisparagingAdjective = disparagingAdjective[Math.floor(Math.random() * disparagingAdjective.length)];

		console.log("You just can't trust these " + randDisparagingAdjective + ", " + randGroupDescriptors + ", " + randNonWhiteEthnicities + " " + randrespectedOccupations + " any more!");

	}

};



// use Object.create ... other 

var trump = Object.create(candidate);

trump.hasBadCombover = true;
trump.gravitas = 3;
trump.leftRight = "right";


trump.listDetails();


trump.makeIgnorantComment();



var randomTrumpGaffe = 0;
        
while (randomTrumpGaffe < 5) {
    console.log(trump.makeIgnorantComment());

    randomTrumpGaffe++
};

// for (randomTrumpGaffe = 0; randomTrumpGaffe < 8; randomTrumpGaffe++) {
// console.log(trump.makeIgnorantComment());
// }







