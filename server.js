const express = require('express');
const db = require('./data/car-model')
const server = express();


server.get('/cars', (req, res) => {
    db.READ().then(db => {
        res.status(200).json(db);
    }) .catch(err => {
        res.status(500).json({success: false, err, message: "The car information could not be retrieved"});
    });
});

server.post('/cars', (req, res) => {
    db.CREATE().then(db => {
        res.status(201).json(db);
    }) .catch(err => {
        res.status(500).json({success: false, err, message: "The car could not be added"});
    });
});






module.exports = server;

