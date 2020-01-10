new Vue({
  el: '#app',
  data: {
	  header: {
	  	title: "Mordhau Weapon Randomizer",
	    image: "images/meow.png"
	  },
	  weaponData: weaponData,
	  formData: {
	  	weaponCount:1,
	  	weaponTypes:["melee","ranged","traps","shields"],
	  	minWeaponCost:[],
	  	maxWeaponCost:[],
	  	excludedWeapons:[]
	  },
	  chosenWeapons:[]
	},
	methods: {
		randomizeWeapons: function() {
			// console.log('weaponCount: ',weaponCount);
			// console.log('weaponData: ',weaponData);
			//console.log('weaponTypes: ',this.formData.weaponTypes);
			console.log('list of excluded weapons: ',this.formData.excludedWeapons);
			var weaponsArray = [];

			if(weaponData.length - this.formData.excludedWeapons.length < this.formData.weaponCount) {
				alert('Not enough weapons');
			} else if(this.weaponTypes.length === 0) {
				alert('Please select at least one weapon type');
			} else {
				var weaponCount = this.formData.weaponCount;
				for(var i=0;i<weaponCount;i++) {
					var candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
					
					if(this.formData.weaponTypes.length > 0 || this.formData.excludedWeapons.length > 0) {
						while((!this.formData.weaponTypes.includes(candidateWeapon.weaponType) && this.formData.weaponTypes.length > 0) || weaponsArray.includes(candidateWeapon) || this.formData.excludedWeapons.includes(candidateWeapon.weaponName)) {
							candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
						}
					}
					
					weaponsArray.push(candidateWeapon);
				}
				this.chosenWeapons = weaponsArray;
			}
		},
		clearExcludedWeapons: function() {
			this.formData.excludedWeapons = [];
		},

		excludeAllWeapons: function() {
			for(var i=0;i<weaponData.length;i++) {
				if(!this.formData.excludedWeapons.includes(weaponData[i].weaponName)) {
					this.formData.excludedWeapons.push(weaponData[i].weaponName);
				}
			}
		},

		//IN DEVELOPMENT
		// includeWeaponType: function(type) {
		// 	for(var i=0;i<this.formData.excludedWeapons.length;i++) {
		// 		if(this.formData.excludedWeapons[i].weaponType == type) {
		// 			this.formData.excludedWeapons.splice(i,1);
		// 		}
		// 	}
		// },

		// excludeWeaponType: function(type) {
		// 	for(var i=0;i<weaponData.length;i++) {
		// 		if(weaponData[i].weaponType == type) {
		// 			if(!this.formData.excludedWeapons.includes(weaponData[i].weaponName)) {
		// 				this.formData.excludedWeapons.push(weaponData[i].weaponName);
		// 			}
		// 		}
		// 	}
		// },

		// updateWeaponTypes: function(e,type) {
		// 	var weaponTypeArray = ["melee","ranged","traps","shields"];
		// 	weaponTypeArray.forEach((type) => {
		// 		if(!this.weaponTypes.includes(type)) {
		// 			excludeWeaponType(type);
		// 		} else {
		// 			includeWeaponType(type);
		// 		}
		// 	})
		// }
	}
})