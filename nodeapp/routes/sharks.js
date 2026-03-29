const express = require('express');
const router = express.Router();
const Shark = require('../models/sharks');

router.get('/', async (req, res) => {
  try {
    const sharks = await Shark.find({});
    res.render('sharks', { sharks: sharks });
  } catch (err) {
    res.status(500).send('Error retrieving sharks');
  }
});

router.post('/', async (req, res) => {
  try {
    const newShark = new Shark({
      name: req.body.name,
      character: req.body.character
    });

    await newShark.save();
    res.redirect('/sharks');
  } catch (err) {
    res.status(400).send('Unable to save shark to database');
  }
});

module.exports = router;
