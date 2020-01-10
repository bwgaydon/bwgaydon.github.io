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
	  }
	  chosenWeapons:{}
	},
	methods: {
		randomWeapon: function(weaponCount) {
			console.log('randomWeapon: ',weaponData[Math.floor(Math.random() * weaponData.length)]);
			var weaponsArray = [];
			for(var i=0;i<weaponCount;i++) {
				weaponsArray.push(weaponData[Math.floor(Math.random() * weaponData.length)]);
			}
		}
})


}