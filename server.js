var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

// module.exports = app;
const port = process.env.PORT || 5001;
app.listen(port,() => console.log(`Listening on port ${port}`));
