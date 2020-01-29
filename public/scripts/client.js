/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// wait till ready
jQuery(function($) {

  
  // listen for form submission
  // prevent default form submission behavior
  // turn form data into query string and send to server
  $("#tweet").submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    // if nothing is entered to tweet
    if (data === "text=") {
      alert("Please Enter Something To Tweet!");
      // if data is too long
    } else if (data.length > 145) {
      alert("Tweet Is Too Long!");
    } else {
      $.ajax('/tweets', { method: 'POST', data })
      .then( () => {
        $(this).trigger('reset'); // clear input feild
        $('.counter').text(i=140)
        loadTweets()
      })
    }
  });

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (getTweet) {
      console.log('Success: ', getTweet);
      // $('.the-tweets').prepend(createTweetElement(getTweet))
      renderTweets(getTweet)
    });
  }
  // Window.onload(loadTweets())

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    // reference html container for tweet feed
    const $tweetContainer = $(".the-tweets");
    $tweetContainer.empty(); //empty out container so we don't see duplicates
    const $createdTweets = $(tweets.map(createTweetElement).join(" "));
    return $tweetContainer.append($createdTweets);

  }

  // takes in a tweet object and returns a tweet article element containing the entire HTML structure of the tweet
  const createTweetElement = function(tweet) {
    const milisecInDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(tweet.created_at);
    const secondDate = new Date();
    const timeDiff = Math.round(Math.abs((firstDate - secondDate) / milisecInDay));
    const markup =
    `<article class="newTweet">
      <header>
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
  }

  // renderTweets(data);
});