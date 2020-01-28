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
$(document).ready(function() {

  $(this).on ('keydown', function(key){

    if (key.keyCode === 8) { //backspace
      if (i < 140) {
        $(".counter").text (i += 1); // increase characters remaining count
        if (i > 0) {
          $(".counter").removeClass('color-red'); // remove red if positive
        }
      }
    } else {
      let res = checker(key.keyCode);
      if (res) {
        $(".counter").text (i -= 1); // decrease characters remaining count
        if (i < 0) {
          $(".counter").addClass('color-red'); // add red if negative
        }
      }
    }
  });
});