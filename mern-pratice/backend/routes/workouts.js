const express = require('express');

const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: "get a all"})
})

// GET a slide workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})




module.exports = router;