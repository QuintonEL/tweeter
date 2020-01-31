// function to toggle new tweet bar
function toggleTweet() {
  const x = document.getElementById("tweet");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //Get the button:
  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// when user scrolls down hide the form toggle button
$(window).scroll(function() {
  if ($(this).scrollTop() > 20) { //use `this`, not `document`
    $('#formToggleButton').css({'display': 'none'})
    $('#arrow').css({'display': 'none'})
  } else {
    $('#formToggleButton').css({'display': 'block'})
    $('#arrow').css({'display': 'block'})
}});