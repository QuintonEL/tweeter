// when the document is rendered and ready to listen go into the function
jQuery(function($) {

  $('.new-tweet').on('keyup', '#tweet textarea', function(){
    const charsTyped = $(this).val().length; // get the length of the current value in this
    const charsLeft = 140 - charsTyped; // get remaining characters left
    const updatedCount = $(this).next().find('.counter').html(charsLeft); // get html for charsLeft of the counter class in the span 
    if (charsLeft < 0) {
      updatedCount.addClass('color-red');
    } else {
      updatedCount.removeClass('color-red');
    }
  });
});