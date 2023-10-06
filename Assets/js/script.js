var today = dayjs();
var saveBtn = $('.saveBtn');
var timeBlock = $('.time-block');
var currentHour = dayjs().format('HH');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('#currentDay').text(today.format('MMM D, YYYY'));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // document.getElementsByClassName('btn-save').addEventListener('click', saveInput());

  // function saveInput() {
    //   console.log(this.id);
  // };
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});

console.log(currentHour);
// sets class and display elements based on its relation to the current hour
for (var i = 0; i < timeBlock.length; i++) {
  var textArea = $(timeBlock[i]).children('.description');
  if (timeBlock[i].id < currentHour) {
    textArea.addClass('past');
  } else if (timeBlock[i].id == currentHour) {
    textArea.addClass('present');
  } else if (timeBlock[i].id > currentHour) {
    console.log(timeBlock[i].id);
    timeBlock.addClass('future');
  };
};

saveBtn.on('click', function () {
  var textContent = $(this).siblings('.description').val();
  var hourId = $(this).parent().attr('id');
  localStorage.setItem(hourId, textContent);
});
