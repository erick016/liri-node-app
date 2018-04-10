var request = require("request");
require("dotenv").config();
var Twitter = require("twitter");


var client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  });
   
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
    else{
        return console.log('Error occurred: ' + error);
    }
  });

  var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.spotifyid,
  secret: process.env.spotifysecret
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var request = require('request');
request('http://www.omdbapi.com/?i="Inception"&apikey=8022c656', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});