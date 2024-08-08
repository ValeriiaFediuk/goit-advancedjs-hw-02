import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('button');
const pickrEl = document.querySelector('#datetime-picker');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDatesMS = selectedDates[0].getTime();
    if (selectedDatesMS > Date.now()) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', 'disabled');
      iziToast.show({
        color: 'red',
        message: 'Please choose a date in the future',
        position: 'topCenter',
        messageColor: 'white',
        progressBar: false,
        icon: 'material-icons',
      });
    }
  },
};

flatpickr(pickrEl, options);

btn.addEventListener('click', setTimer);

function setTimer() {
  btn.setAttribute('disabled', 'disabled');
  pickrEl.setAttribute('disabled', 'disabled');

  const userSelectedDate = new Date(pickrEl.value).getTime();
  
  timerId = setInterval(() => {
    const difference = userSelectedDate - Date.now();

    if (difference <= 0) {
      clearInterval(timerId);
      iziToast.show({
        color: 'green',
        message: 'Countdown completed!',
        position: 'topCenter',
        messageColor: 'white',
        progressBar: false,
        icon: 'material-icons',
      });
      pickrEl.removeAttribute('disabled');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(difference);

    daysValue.textContent = days.toString().padStart(2, '0');
    hoursValue.textContent = hours.toString().padStart(2, '0');
    minutesValue.textContent = minutes.toString().padStart(2, '0');
    secondsValue.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}