const express = require("express");
const room = require("../model/room");
const reservation = require("../model/reservation");
const activity = require("../model/activity");
const roomSchema = require("../model/room");
const reservationSchema = require("../model/reservation");
const activitySchema = require("../model/activity");
const router = express.Router();

router.post('/room', (req, res) => {
    const room = roomSchema(req.body);
    room
        .save().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/roms', (req, res) => {

    roomSchema
        .find().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/room/:id', (req, res) => {
    const { id } = req.params;

    roomSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/roomsAvalible', (req, res) => {
    var rooms = [];
    roomSchema
        .find().then((data) => {
            for (const iterator of data) {
                if(iterator.avaliable)
                rooms.push(iterator)
            }
            res.json(rooms)
            
        })
        .catch((error) => res.json({ message: error }));
});

router.put('/room/:id', (req, res) => {
    const room = req.body;
    const {id} = req.params;
    roomSchema
        .findByIdAndUpdate(id,room).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/room/:id', (req, res) => {
    const { id } = req.params;
    roomSchema
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.post('/reservation', (req, res) => {
    const reservation = reservationSchema(req.body);
    reservation
        .save().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/reservations', (req, res) => {

    reservationSchema
        .find().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/reservation/:id', (req, res) => {
    const { id } = req.params;

    reservationSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put('/reservation/:id', (req, res) => {
    const reservation = req.body;
    const {id} = req.params;
    reservationSchema
        .findByIdAndUpdate(id,reservation).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/reservation/:id', (req, res) => {
    const { id } = req.params;
    reservationSchema
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.post('/activity', (req, res) => {
    const activity = activitySchema(req.body);
    activity
        .save().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/activities', (req, res) => {

    activitySchema
        .find().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/activity/:id', (req, res) => {
    const { id } = req.params;

    activitySchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put('/activity/:id', (req, res) => {
    const activity = req.body;
    const {id} = req.params;
    activitySchema
        .findByIdAndUpdate(id,activity).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/activity/:id', (req, res) => {
    const { id } = req.params;
    activitySchema
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
