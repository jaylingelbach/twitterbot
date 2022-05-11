const { response } = require('express');
const res = require('express/lib/response');
var Twit = require('twit');

let twit = new Twit({
    consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
    access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

// let params = {
//     q: '#MayTheFourth',
//     count: 2
//   };



//   function tweetResult(err, data, response) {
//     var tweetMsgs = data.statuses;
//     for (let i = 0; i < tweetMsgs.length; i++) {
//         if (err) {
//             console.log("Error message for twit " + err.message);
//         } else {
//             console.log('\n');
//             console.log('Twitter handle: ', tweetMsgs[i].user.screen_name);
//             console.log('Name: ', tweetMsgs[i].user.name);
//             console.log('User Location: ', tweetMsgs[i].user.location);
//             console.log('Created at: ', tweetMsgs[i].created_at);
//             console.log(tweetMsgs[i].text);
//             console.log('\n');
//         }
//     }
//   }
//   twit.get('search/tweets', params, tweetResult);

let userParams = {
    user_id: 2216754409
}
function getUserById(err, data, response) {
    if(err){
        console.log('Error message: ', err);
    } else {
        console.log('Data: ', data);
    }
}
  twit.get(`/users/lookup`, userParams, getUserById);
  

