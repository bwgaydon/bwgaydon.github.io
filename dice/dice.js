new Vue({
  el: '#app',
  data: {
	  header: {
	  	title: "Mordhau Weapon Randomizer",
	    image: "images/meow.png"
	  },
	  weaponData: weaponData,
	  formData: {
	  	weaponCount:0,
	  	weaponTypes:[]
	  }
	  chosenWeapons:{}
	},
	methods: {
		randomWeapon: function(weaponCount) {
			console.log('randomWeapon: ',weaponData[Math.floor(Math.random() * weaponData.length)]);
			return weaponData[Math.floor(Math.random() * weaponData.length)];
		}
})


}