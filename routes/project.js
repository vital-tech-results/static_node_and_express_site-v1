const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const numberOfProjects = projects.length;
    if (id > numberOfProjects || isNaN(id)) {
        res.redirect('/');
    }
    res.render('project', {
        project: projects[id]
    });
});

module.exports = router;

