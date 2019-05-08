// let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoibWt6IiwiYSI6ImNqdmFydTZ1MzBmemM0NWw5bGc0aWl2YW0ifQ.ezLHg0xVQpUyMl6GZTuS0g';
// let url2 = 'https://api.darksky.net/forecast/be28bb0be761bb436112bc6392dec433/${latitude},${longitude}?units=si&lang=en'
// fetch('http://puzzle.mead.io/puzzle')
//   .then((response) => {
//     response.json()
//       .then((data) => {
//         console.log(data);
//       })
//   })

const weatherForm = document.querySelector('form');
const searchEl = document.querySelector('input');

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = searchEl.value;
  messageOne.textContent = ' ';
  messageTwo.textContent = '';

  fetch(`/weather?address=${location}`)
    .then((response) => {
      response.json()
        .then((data) => {
          if (data.error) {
            // console.log(data.error);
            messageOne.textContent = data.error;
          } else {
            // console.log(data.location);
            messageOne.textContent = data.location;
            // console.log(data.forecast);
            messageTwo.textContent = data.forecast;
          }
        })
    })

})