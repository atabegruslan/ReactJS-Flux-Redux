var route = require('koa-route');
var serve = require('koa-static');
var cors = require('koa-cors');

var koa = require('koa');
var app = module.exports = koa();

var ratingController = require('./Controllers/RatingController.js');

app.use(cors());

// Not used
//app.use(route.get('/', ratingController.show));

/*
 * With    proxy: get('/api/read/' -> localhost:3000/api/read
 * Without proxy: get('/read/'     -> localhost:3000/read
 * Applicable for all these routes:
 */
app.use(route.get('/api/read/', ratingController.readAll)); // localhost:3000/api/read
app.use(route.post('/api/', ratingController.create));
app.use(route.put('/api/', ratingController.update));
app.use(route.delete('/api/', ratingController.delete));

var port = 3000;

app.listen(port);
console.log('listening at localhost:' + port);