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
	  	maxWeaponCost:[]
	  },
	  chosenWeapons:[]
	},
	methods: {
		randomizeWeapons: function(weaponCount) {
			// console.log('weaponCount: ',weaponCount);
			// console.log('weaponData: ',weaponData);
			console.log('weaponTypes: ',formData.weaponTypes);
			var weaponsArray = [];
			for(var i=0;i<weaponCount;i++) {
				var candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
				
				if(this.formData.weaponTypes.length > 0) {
					while(!this.formData.weaponTypes.includes(candidateWeapon.weaponType) || !weaponsArray.includes(candidateWeapon) || candidateWeapon.weaponCost < this.formData.minWeaponCost[i] || candidateWeapon.weaponCost > this.formData.maxWeaponCost[i]) {
						candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
					}
				}
				
				weaponsArray.push(candidateWeapon);
			}
			this.chosenWeapons = weaponsArray;
		}
	}
})