var route = require('koa-route');
var serve = require('koa-static');
var cors = require('koa-cors');

var koa = require('koa');
var app = module.exports = koa();

var ratingController = require('./Controllers/RatingController.js');

app.use(cors());

//app.use(route.get('/', ratingController.show));
app.use(route.get('/read/', ratingController.readAll)); // localhost:3000/read
app.use(route.post('/', ratingController.create));
app.use(route.put('/', ratingController.update));
app.use(route.delete('/', ratingController.delete));

var port = 3000;

app.listen(port);
console.log('listening at localhost:' + port);