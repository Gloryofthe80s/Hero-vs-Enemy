var hero = {
	'name' : "Herman",
	'maxHealth' : 100,
	'currentHealth' : 100,
	'damage' : 10,
	'isTargetable' : true,

	'bellow' : function() {
		console.log(this.name + ' lets out a blood-curdling cry: "My name is ' + this.name + ', and I thirst for the blood of my adversaries!"')
	},

	'attack' : function(target) {
		if (target.isTargetable == false) {
		console.log('Not a valid target!')	
		} else if (target.currentHealth <= 0) {
			console.log(target.name + ' has already been turned to a pile of leaky viscera! Is your thirst for blood not sated?!')
		} else {
			console.log(target.name + ' currently has ' + target.currentHealth + ' health.')
			console.log(this.name + ' is going to deal ' + this.damage + ' damage to ' + target.name)
			target.currentHealth = target.currentHealth - this.damage 
			console.log(this.name + ' unsheathes his blade and drives it into the gnarled flesh of ' + target.name + '. ' + target.name + ' now has ' + target.currentHealth + ' health remaining.')
	  }
	},

	'drink' : function(target) {
		if (target.isDrinkable == false) {
			console.log("You can't drink " + target.name + ", you ignorant barbarian!")
		} else if (target.drinksLeft <= 0) {
			console.log(this.name + " goes to take a drink, but there's none left! " + this.name + "starts to sob uncontrollably.")
		} else {
			console.log(this.name + " quaffs heartily and merrily like a gleeful piggy.")
			target.drinksLeft = target.drinksLeft - 1
			this.currentHealth = this.maxHealth
			console.log(this.name + " now has full health!")
		}
		
		}
};

var enemy = {
	'name' : "the savage beast from the netherworld's deepest and most heinous depths",
	'maxHealth' : 20,
	'currentHealth' : 20,
	'damage' : 5,
	'armor'  : 1,
	'isTargetable' : true,
	'isDrinkable' : false, 
	
	'attack' : function(target) {
		if (target.isTargetable == false) {
		console.log('Not a valid target!')	
		} else if (target.currentHealth <= 0) {
			console.log(target.name + ' has already been turned to a pile of leaky viscera! Is your thirst for blood not sated?!')
		} else {
			console.log(target.name + ' currently has ' + target.currentHealth + ' health.')
			console.log(this.name + ' is going to deal ' + this.damage + ' damage to ' + target.name)
			target.currentHealth = target.currentHealth - this.damage 
			console.log(this.name + ' brutishly tears at the flesh of ' + target.name + '. ' + target.name + ' now has ' + target.currentHealth + ' health remaining.')
	  }
	}
};

var wellOfLife = {
	'drinksLeft' : 1,
	'isTargetable' : false,
	'isDrinkable' : true
};