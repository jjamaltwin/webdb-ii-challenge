const express = require('express');
const db = require('./data/car-model')
const server = express();


server.get('/accounts', (req, res) => {
    db.READ().then(db => {
        res.status(200).json(db);
    }) .catch(err => {
        res.status(500).json({success: false, err, message: "The acccount information could not be retrieved"});
    });
});






module.exports = server;

