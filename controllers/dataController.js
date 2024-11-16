const Data = require('../models/dataModel');

const uploadData = async (req, res) => {
  try {
    const data = new Data({ ...req.body, userId: req.user.id });
    await data.save();
    res.status(201).json({ message: 'Data uploaded successfully', data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Data.find({ userId: req.user.id });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { uploadData, getData };
