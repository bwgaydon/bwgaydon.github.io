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
	  	weaponTypes:[],
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
			} else {
				var weaponCount = this.formData.weaponCount;
				for(var i=0;i<weaponCount;i++) {
					var candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
					
					if((this.formData.weaponTypes.length > 0 || this.formData.excludedWeapons.length > 0) && this.formData.excludedWeapons.length < weaponData.length - 4) {
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
			weaponData.forEach(function(element) {
				if(!this.formData.excludedWeapons.includes(element.weaponName)) {
					this.formData.excludedWeapons.push(element.weaponName);
				}
			})
		},
		//UNDER DEVELOPMENT
		removeWeaponType: function(category) {
			weaponData.forEach(function(element,index) {
				if(element.weaponType == category) {
					if(this.formData.excludedWeapons.includes(element.weaponName)) {
						this.formData.excludedWeapons.splice(index,1);
					}
				}
			})
		}
	}
})