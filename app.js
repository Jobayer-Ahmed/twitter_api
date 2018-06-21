const express = require('express');
const app = express();
let dataset = '';

const Twit = require('twit');
	twitter = new Twit({
		consumer_key: 'Edo9JGcwhabgxin3qIhp8Xnun',
		consumer_secret: 'O6W9h6BjKGntVH5P0gfpmVY3RmAdlmwk88JV3JymWRy4ccd5ha',
		access_token: '919642804816453632-8zSVPRarnsSaYClSBoLc7x1zNhyN759',
		access_token_secret: 'Cc72jHWMEZq03hTTAebQQ3zgCKu6GPFb20Ax4OI4XfzLv'
	})

const util = require('util'),
	options = {
		screen_name: 'jobayeramickey',
		count: 10
	}

twitter.get('statuses/user_timeline', options, function(err, data) {
	dataset = data[0];
	console.log(dataset)
	postData(dataset);
})

const postData = (data) => {
	app.get('/data', (req, res) => {
		res.send(data)
	})

	const PORT = process.env.PORT || 3000;

	app.listen(PORT, () => {
		console.log(`Apps listening on port ${PORT}`);
	})
}