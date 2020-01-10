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
	  	weaponTypes:[]
	  },
	  chosenWeapons:[]
	},
	methods: {
		randomizeWeapons: function(weaponCount) {
			console.log('weaponCount: ',weaponCount);
			console.log('weaponData: ',weaponData);
			var weaponsArray = [];
			for(var i=0;i<weaponCount;i++) {
				var candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
				/*
				while(!this.formData.weaponTypes.includes(candidateWeapon.weaponType)) {
					candidateWeapon = weaponData[Math.floor(Math.random() * weaponData.length)];
				}
				*/
				weaponsArray.push(candidateWeapon);
			}
			console.log('randomizeWeapons: ',weaponsArray);
			this.chosenWeapons = weaponsArray;
		}
	}
})