var Twit = require('twit');


let twit = new Twit({
    consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
    access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

let params = {
    q: 'Lego Star Wars',
    count: 1
  };

  function tweetResult(err, data, response) {
    var tweetMsgs = data.statuses;
    for (let i = 0; i < tweetMsgs.length; i++) {
        if (err) {
            console.log("Error message for retweet " + err.message);
        } else {
            console.log('Twitter handle: ', tweetMsgs[i].user.screen_name);
            console.log('User Location: ', tweetMsgs[i].user.location);
            console.log(tweetMsgs[i].text);
            console.log('\n');
        }
    }
  }

  twit.get('search/tweets', params, tweetResult);
