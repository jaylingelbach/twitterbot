var Twit = require('twit');


let twit = new Twit({
    consumer_key: 'mRKLnCTR7Zwpp4C3cDzBBo3rW',
    consumer_secret: 'nnNRlhu43efcTby3OKvFD1JbqVb5sExkCprINfE7gjca6eTLrQ',
    access_token: '976857674842243072-byMmsxkfgdeRVKTGdYxWmWXi72VBPA8',
    access_token_secret: 'QY9SWnaARAk6jJqeD1zBgLlginAdDAK22vQKazqGjFnQw',
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
