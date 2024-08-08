import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', onFormSubmit);
} else {
  console.error('Form element not found');
}

function onFormSubmit(event) {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  if (isNaN(delay)) {
    console.error('Invalid delay value');
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid delay value.',
    });
    return;
  }

  if (!state) {
    console.error('No state selected');
    iziToast.error({
      title: 'Error',
      message: 'Please select a state.',
    });
    return;
  }

  console.log('Form submitted');
  console.log('Delay:', delay);
  console.log('State:', state);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      } else {
        console.error('Invalid state value');
        iziToast.error({
          title: 'Error',
          message: 'Invalid state value.',
        });
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
}