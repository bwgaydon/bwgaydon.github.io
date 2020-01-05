new Vue({
  el: '#app',
  data: {
	  header: {
	    image: "images/meow.png"
	  },
	  sidebar: {
	  	items: [
	  	{
	  		linkText:"First",
	  		linkAddress:"http://google.com"
	  	},
	  	{
	  		linkText:"Second",
	  		linkAddress:"http://yahoo.com"
	  	},
	  	{
	  		linkText:"Third",
	  		linkAddress:"http://bing.com"
	  	}
	  	]
	  }
	}
})