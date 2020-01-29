i = 140;

// array of keypresses we don't want to count
let badInput = [9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145];

// function to check if the keypress is valid or not according to array above
const checker = function(key) {
  for (let i = 0; i < badInput.length; i++) {
    if (key === badInput[i]) {
      return false;
    }
  }
  return true;
}

// when the document is rendered and ready to listen go into the function
//$(document).ready(function() {
jQuery(function($) {

  //$('textarea').on('keydown', function(key){ // this refers to textarea
  $('.new-tweet').on('keyup', '#tweet textarea', function(key){
    const charsTyped = $(this).val().length; // get the length of the current value in this
    const charsLeft = 140 - charsTyped; // get remaining characters left
    const updatedCount = $(this).next().find('.counter').html(charsLeft); // get html for charsLeft of the counter class in the span 

    if (charsLeft < 0) {
      updatedCount.addClass('color-red');
    } else {
      $('.counter').removeClass('color-red');
    }

    // if (key.keyCode === 8) { //backspace
    //   if (i < 140) {
    //     $(".counter").text (i += 1); // increase characters remaining count
    //     if (i > 0) {
    //       $(".counter").removeClass('color-red'); // remove red if positive
    //     }
    //   }
    // } else {
    //   let res = checker(key.keyCode);
    //   if (res) {
    //     $(".counter").text (i -= 1); // decrease characters remaining count
    //     if (i < 0) {
    //       $(".counter").addClass('color-red'); // add red if negative
    //     }
    //   }
    // }
  });
});