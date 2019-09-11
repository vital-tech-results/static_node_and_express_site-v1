const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { data } = require('./data.json');
const router = express.Router();
const { projects } = data;

const app = express();
app.use(cors());

// a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));
app.use('/img', express.static('img'));
//set the “view engine” to “pug”
app.set('view engine', 'pug');


//An "index" route(/) to render the "Home" page with the locals set to data.projects

app.get('/', (req, res) => {
    res.render('index', { projects: projects });
});

// An "about" route (/about) to render the "About" page
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (res, req) => {
    res.render('data.json');
});

app.get('/project', (req, res) => {
    res.render('project', { projects: projects });
});

// app.get('/:id', (req, res) => {
//     const { id } = req.params;
//     return res.redirect(`/project/${id}`);
// });

app.listen(3000, () => {
    console.log("the app is running on port 3000 now");
});
