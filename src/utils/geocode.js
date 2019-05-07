const request = require('request');

const geocode = (address, cb) => {
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWt6IiwiYSI6ImNqdmFydTZ1MzBmemM0NWw5bGc0aWl2YW0ifQ.ezLHg0xVQpUyMl6GZTuS0g`
  request({
    url: geoUrl,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      cb('unable to connect to service', undefined);
    } else if (!body.features.length) {
      cb('invalid input. unable to find . search again!', undefined);
    } else {
      cb(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode;

//==================================================
// mapbox.com
// pk.eyJ1IjoibWt6IiwiYSI6ImNqdmFydTZ1MzBmemM0NWw5bGc0aWl2YW0ifQ.ezLHg0xVQpUyMl6GZTuS0g
// Geocoding = address to lang and latitude
// address -> lat/lang => weather

// request({
//   url: mapUrl,
//   json: true
// }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to service!'); // cl error
//   } else if (!response.body.features.length) {
//     console.log('invalid input location. not found!');
//   } else {
//     const long = response.body.features[0].center[0];
//     const lat = response.body.features[0].center[1];
//     console.log(`${lat}N , ${long}W`);
//   }
// })