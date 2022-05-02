var Twit = require('twit');

    let twit = new Twit({
    consumer_key: 'mRKLnCTR7Zwpp4C3cDzBBo3rW',
    consumer_secret: 'nnNRlhu43efcTby3OKvFD1JbqVb5sExkCprINfE7gjca6eTLrQ',
    access_token: '976857674842243072-byMmsxkfgdeRVKTGdYxWmWXi72VBPA8',
    access_token_secret: 'QY9SWnaARAk6jJqeD1zBgLlginAdDAK22vQKazqGjFnQw',
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

let params = {
    q: '#100DaysOfCode since:20200606',
    count: 20
  };
  twit.get('search/tweets, params');

  function tweetResult(err, data, response) {
    var tweetMsgs = data.statuses;
    for (let i = 1; i <= tweetMsgs.length; i++) {
      console.log(tweetMsgs[i].text);
    }
  }

  tweetResult();