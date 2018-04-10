console.log('this is loaded');

//https://github.com/spotify/web-api-auth-examples
//

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  spotifyid: process.env.SPOTIFY_ID,
  spotifysecret: process.env.SPOTIFY_SECRET
};