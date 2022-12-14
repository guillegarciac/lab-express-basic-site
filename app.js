const express = require ('express');
const app = express();
const hbs = require('hbs');

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials'); //hbs.registerPartials.path.join(__dirname, '/views/partials')
hbs.registerHelper('toUpperCase', function(str) { //without this the page was highlighting an error.
  return str.toUpperCase();
});

app.get('/', (req, res, next) => {
  res.status(200).render('home');
})

app.get('/about', (req, res, next) => {
  res.status(200).render('about')
})

app.get('/works', (req, res, next) => {
  res.status(200).render('works')
})

app.get('/gallery', (req, res, next) => {
  res.status(200).render('gallery')
})

app.get('/riders', (req, res, next) => {
  const riders = {
    riders: [
      {
        name: 'Remco Evenepoel',
        age: 22,
        country: 'Belgium'
      },
      {
        name: 'Tadej Pogačar',
        age: 24,
        country: 'Slovenia'
      },
      {
        name: 'Egan Bernal',
        age: 25,
        country: 'Colombia'
      },
      {
        name: 'Enric Mas',
        age: 27,
        country: 'Spain'
      }
    ]
  }
  res.render('riders', riders);
})

app.listen(3000, () => {console.log('App running')})

