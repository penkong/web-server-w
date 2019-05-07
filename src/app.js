const express = require('express');
const path = require('path');
const hbs = require('hbs');
//--------------------
//app.com
//app.com/help
const app = express();


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

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'article not found please join back',
    name: 'Created by MKz'
  })
})

// 404 handler
app.get('*', (req, res) => {
  res.render('404', {
    title: 'there is not such thing here 404!',
    name: 'Created by MKz'
  })
})
//===========================================











//functionality do here.
app.get('/weather', (res, req) => {
  res.send('d');
})
// nodemon src/app.js -e js,hbs














//server runner
app.listen(3000, () => {
  console.log('server is up on port 3000!...');
})

























//