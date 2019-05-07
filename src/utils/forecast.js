const request = require('request');

const forecast = (latitude, longitude, cb) => {
  const url = `https://api.darksky.net/forecast/be28bb0be761bb436112bc6392dec433/${latitude},${longitude}?units=si&lang=en`
  request({
    url,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      cb('unable to connect to service', undefined);
    } else if (body.error) {
      cb('invalid input. unable to find . search again!', undefined);
    } else {
      // cb(undefined, {
      //   temperature: body.currently.apparentTemperature,
      //   probableRain: body.currently.precipProbability,
      //   forecastToday: body.daily.data[0].summary
      // })
      cb(undefined, body.daily.data[0].summary +
        ' It is currently ' + body.currently.temperature +
        ' degrees out. There is a ' +
        body.currently.precipProbability +
        '% chance of rain.'
      )
    }
  })
}

module.exports = forecast;


//==================================================================
// www.darksky.net
// const url = 'https://api.darksky.net/forecast/be28bb0be761bb436112bc6392dec433/37.8267,-122.4233?units=si&lang=en';

// request({
//   url,
//   json: true
// }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to service!'); // cl error
//   } else if (response.body.error) {
//     console.log('invalid input location. not found!');
//   } else {
//     const temperature = response.body.currently.apparentTemperature;
//     const probableRain = response.body.currently.precipProbability;
//     const forecastToday = response.body.daily.data[0].summary;
//     console.log(`${forecastToday} its currently ${temperature} degrees out. there is a ${probableRain} chance of rain`);
//   }
// })