const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

//An "index" route(/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
    res.render('index', { projects: projects });
});

// An "about" route (/about) to render the "About" page
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;