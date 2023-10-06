var today = dayjs();
var saveBtn = $('.saveBtn');
var timeBlock = $('.time-block');
var currentHour = dayjs().format('HH');

$(function () {
  // adds the date to the header
  $('#currentDay').text(today.format('MMM D, YYYY'));
});

// sets class and display elements based on its relation to the current hour
timeBlock.each(function () {
  var textArea = $(this).children('.description');
  if (this.id < currentHour) {
    textArea.addClass('past');
  } else if (this.id == currentHour) {
    textArea.addClass('present');
  } else if (this.id > currentHour) {
    textArea.addClass('future');
  };
});

// saves text to local storage when save button is clicked
saveBtn.on('click', function () {
  var textContent = $(this).siblings('.description').val();
  var hourId = $(this).parent().attr('id');
  localStorage.setItem(hourId, textContent);
});

// imports text from local storage to text area
$('.description').each(function () {
  timeBlockId = $(this).parent().attr('id');
  eventShow = localStorage.getItem(timeBlockId);
  $(this).val(eventShow);
});
