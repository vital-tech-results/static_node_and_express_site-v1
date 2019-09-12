const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes');


const projectRoutes = require('./routes/project');

app.use(routes);


app.use('/project', projectRoutes);

app.use(cors());

//set the “view engine” to “pug”
app.set('view engine', 'pug');

// a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));
app.use('/img', express.static('img'));

app.use((req, res, next) => {
    const err = new Error("The page you are looking for does not exist.");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
    console.log('The page you are looking for does not exist.');
});

app.listen(3000, () => {
    console.log("the app is running on port 3000 now");
});
