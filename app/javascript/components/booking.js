import flatpickr from 'flatpickr';

const cooldatepicker = function () {
  const inputSelector = document.getElementById('booking_start_date');
  const endDateinput = document.getElementById('booking_end_date');


if(inputSelector && endDateinput) {
  flatpickr(inputSelector, {
    minDate: 'today',
    dateFormat: 'd-m-Y',
    onChange: function(_,selectedDate) {
      if (selectedDate === '') {
      return endDateinput.disabled = true;
      }
      endDateCalendar.set('minDate', selectedDate);
      endDateinput.disabled = false;
    }
  }
 );
  const endDateCalendar =
  flatpickr(endDateinput, {
      dateFormat: 'd-m-Y',
    });
}
}


export {cooldatepicker};




