const express = require('express');
const path = require('path');
const hbs = require('hbs');

//---------------------------------------------
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
//--------------------
//app.com
//app.com/help
const app = express();
const port = process.env.PORT || 3000;



// cl __dirname and __filename
// to server up a directory to customize server
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')







//handlebars template engine to tell to express , set key value for express setting
//pointing express to correct directory . set up handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// setup static directory to serve
app.use(express.static(publicDir));




// for dynamic page of hbs
app.get('', (req, res) => {
  res.render('index', {
    title: 'weather App | find your area temperature',
    name: 'Created by MKz'
  })

})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'weather App | find your area temperature',
    name: 'Created by MKz'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'weather App | find your area temperature',
    name: 'Created by MKz'
  })
})

////////
//sends back json
app.get('/weather', (req, res) => {
  //catch query string from url == additional information
  if (!req.query.address) {
    return res.send({
      error: 'You must provide a location'
    })
  }
  //err0r and data
  geocode(req.query.address, (error, {
    latitude,
    longitude,
    location
  } = {}) => {
    if (error) {
      return res.send({
        error
      })
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({
          error
        })
      }
      res.send({
        location,
        address: req.query.address,
        forecast: forecastData
      })
    })
  })
})



app.get('/products', (req, res) => {
  //catch query string from url
  if (!req.query.search) {
    return res.send({
      error: 'You must provide search term'
    })
  }
  req.query()
  res.send({
    products: []
  })
})








/////////////////////////////////////
// 404 handler
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'article not found please join back',
    name: 'Created by MKz'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'there is not such thing here 404!',
    name: 'Created by MKz'
  })
})
//===========================================

// nodemon src/app.js -e js,hbs


//server runner
app.listen(port, () => {
  console.log(`server is up on port ${port}!...`);
})