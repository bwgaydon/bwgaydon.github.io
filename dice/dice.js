import json from './weaponData.json';


new Vue({
  el: '#app',
  data: {
	  header: {
	  	title: "Mordhau Weapon Randomizer"
	    image: "images/meow.png"
	  },
	  weaponData: json
	}
})