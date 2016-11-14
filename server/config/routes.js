
var twitter = require("../twitter/twitter.js")

module.exports = function(app, express){
	app.post('/api/finish', twitter.postOnTwitter)
}