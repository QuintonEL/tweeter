// wait till ready
jQuery(function($) {

  // listen for form submission and turn data into query string and send to server
  $("#tweet").submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    // if nothing is entered to tweet
    if (data === "text=") {
      $('.output1').slideDown();
      $(document).ready(function(){
        function hideMsg(){
          $('.output1').slideUp();
        }
        setTimeout(hideMsg,2000); // delay on message hide
      });
      // if data is too long
    } else if (data.length > 145) {
      $('.output2').slideDown();
      $(document).ready(function(){
        function hideMsg(){
          $('.output2').slideUp();
        }
        setTimeout(hideMsg,2000); // delay on message hide
    });
    } else {
      $.ajax('/tweets', { method: 'POST', data })
      .then( () => {
        $('.output1').hide()
        $('.output2').hide()
        $(this).trigger('reset'); // clear input feild
        $('.counter').text(i = 140)
        loadTweets()
      })
    }
  });

  // get tweets and render
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (getTweet) {
      renderTweets(getTweet)
    });
  }

  // loops through tweets and calls createTweetElement and appends to container
  const renderTweets = function(tweets) {
    tweets.reverse();
    const $tweetContainer = $(".the-tweets");
    $tweetContainer.empty(); //empty out container so we don't see duplicates
    const $createdTweets = $(tweets.map(createTweetElement).join(" "));
    return $tweetContainer.append($createdTweets);

  }

  // function to create a safe html text input from user
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
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
      <p class="tweetFeed">${escape(tweet.content.text)}</p>
      <footer class="timeStamp">
        ${timeDiff} days ago 
        <img src="../images/like.png" align="right">
        <img src="../images/retweet.png" align="right">
        <img src="../images/flag.png" align="right">
      </footer>
    </article>`;
    return markup;
  }
});