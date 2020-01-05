new Vue({
  el: '#app',
  header: {
    message: 'Hello Vue.js!'
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
})