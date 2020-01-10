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
		randomizeWeapons: function(weaponCount) {
			// console.log('weaponCount: ',weaponCount);
			// console.log('weaponData: ',weaponData);
			//console.log('weaponTypes: ',this.formData.weaponTypes);
			console.log('list of excluded weapons: ',this.formData.excludedWeapons);
			var weaponsArray = [];
			for(var i=0;i<weaponCount;i++) {
				var candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
				
				if(this.formData.weaponTypes.length > 0 || this.formData.excludedWeapons.length > 0) {
					while((!this.formData.weaponTypes.includes(candidateWeapon.weaponType) || this.formData.weaponTypes.length === 0) || weaponsArray.includes(candidateWeapon) || (this.formData.excludedWeapons.includes(candidateWeapon.weaponName)  || this.formData.excludedWeapons.length === 0)) {
						candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
					}
				}
				
				weaponsArray.push(candidateWeapon);
			}
			this.chosenWeapons = weaponsArray;
		},
		clearExcludedWeapons: function() {
			
			this.formData.excludedWeapons = []
		}
	}
})