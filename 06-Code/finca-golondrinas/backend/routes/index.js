const express = require("express");
const Room = require("../model/room");
const Reservation = require("../model/reservation");
const Activity = require("../model/activity");
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
router.get('/rooms', (req, res) => {

    roomSchema
        .find().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/room/:name', async (req, res) => {
    //const{codigo}=;
    const roomSearched = await roomSchema.findOne({ name: req.params.name })
    if (!roomSearched) return res.sendStatus(404)
    return res.json(roomSearched)
});

router.put('/roomDisailable/:name', (req, res) => {
    roomSchema
        .updateOne(
            { name: req.params.name },
            { $set: { available: false } }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put('/roomAvailable/:name', (req, res) => {
    roomSchema
        .updateOne(
            { name: req.params.name },
            { $set: { available: true } }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/rooms/:id', async (req, res) => {
    console.log(req.params.id);
    const roomSearched = await roomSchema.findOne({ id: req.params.id })
    if (!roomSearched) return res.sendStatus(404)
    return res.json(roomSearched)
});

router.get('/roomsAvailable', (req, res) => {
    var rooms = [];
    roomSchema
        .find().then((data) => {
            for (const iterator of data) {
                if (iterator.available)
                    rooms.push(iterator)
            }
            res.json(rooms)
        })
        .catch((error) => res.json({ message: error }));
});

router.get('/rooms', (req, res) => {

    roomSchema
        .find().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.put('/rooms/:id', (req, res) => {
    roomSchema
        .updateOne({ id: req.params.id },
            { $set: { 
                name: req.body.name,
                adults: req.body.adults,
                children: req.body.children,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                available: req.body.available
             } }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/room/:id', async (req, res) => {
    const roomRemoved = await roomSchema.remove({ id: req.params.id });
    if (!roomRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
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
        .findOne({ "id": req.params.id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put('/reservation/:id', (req, res) => {
    roomSchema
        .updateOne({ id: req.params.id },
            { $set: { 
                name: req.body.name,
                email: req.body.email,
                recreations: req.body.recreations,
                room: req.body.room,
                cellphone: req.body.cellphone,
                checkin: req.body.checkin,
                checkout: req.body.checkout
             } }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/reservation/:id', async (req, res) => {
    const reservationRemoved = await reservationSchema.remove({ id: req.params.id });
    if (!reservationRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
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
    roomSchema
        .updateOne({ id: req.params.id },
            { $set: { 
                name: req.body.name,
                description: req.body.description,
                children: req.body.children,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                available: req.body.available
             } }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/activity/:id', async (req, res) => {
    const activityRemoved = await activitySchema.remove({ id: req.params.id });
    if (!activityRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
});
module.exports = router;
