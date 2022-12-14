const express = require ('express');
const app = express();
const hbs = require('hbs');

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials'); //hbs.registerPartials.path.join(__dirname, '/views/partials')

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

app.listen(3000, () => {console.log('App running')})

