const express = require('express');

const router = express.Router();

// Les posts seront disponibles sur http://localhost/5000/posts 
router.get('/', (req, res) => {
    res.send('This works');
});

module.exports.router;