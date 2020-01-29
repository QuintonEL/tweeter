/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// wait till ready
jQuery(function($) {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const $tweetContainer = $(".the-tweets");

  const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const $createdTweets = $(tweets.map(createTweetElement).join(" "));
  return $tweetContainer.append($createdTweets);
  }

  // takes in a tweet object and returns a tweet article element containing the entire HTML structure of the tweet
  const createTweetElement = function(tweet) {
  // let $tweet = $('<article>').addClass('tweet');
    const milisecInDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(tweet.created_at);
    const secondDate = new Date();
    const timeDiff = Math.round(Math.abs((firstDate - secondDate) / milisecInDay));
    const markup =
    `<article class="newTweet">
      <header> <!--flexbox row-->
        <figure>
          <img src=${tweet.user.avatars} alt="" class="avatar">
          <figcaption class="userName">${tweet.user.name}</figcaption>
        </figure>
        <div class="info">
          <div class="handle">${tweet.user.handle}</div>
        </div>
      </header>
      <p class="tweetFeed">${tweet.content.text}</p>
      <footer class="timeStamp">${timeDiff} days ago</footer>
    </article>`;
    return markup;
  // return $tweet;
  }

  renderTweets(data);
});