var Twit = require('twit');

var T = new Twit({
	consumer_key:         'ZwtUypK2xvz23cu4enxGAw4FK',
	consumer_secret:      'cgGgYG1JzYdp6lHd3d4Xsdnxs4VE6UZIDBSADJJWZWIoiwkb5r',
	access_token:         '797937484583829504-opKzXtLL9GW473a9HBaTsQxGF9d0TJz',
	access_token_secret:  'bPhASOeFhCm7LceY6WpEaoSu43v49434PRbHEprpRmJWi'
})

module.exports = {
	postOnTwitter: function (req, res) {
		T.post('statuses/update', { status: 'I finished sudoku! in ' + new Date() }, function(err, data) {
			if (err) {
				res.status(500).send(err)
			} else {
				res.status(200).send('done')
			}
		})
	}
}