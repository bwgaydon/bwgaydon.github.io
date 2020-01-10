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
				weaponsArray.push(weaponData[Math.floor(Math.random() * weaponData.length)]);
			}
			console.log('randomizeWeapons: ',weaponsArray);
			this.chosenWeapons = weaponsArray;
		}
	}
})