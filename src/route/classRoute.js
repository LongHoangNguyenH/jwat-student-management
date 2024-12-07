const router = require('express').Router();
const Class = require('../model/class.js');

let listClass = [];
let classId = 0;

// add a class
router.post('/create', (req, res) => {
  try {
    const { className } = req.body;
    for (const cls of listClass) {
      if (cls.className === className) {
        return res.status(400).json({ message: 'Class already exists' });
      }
    }
    const newClass = new Class(classId, className);
    listClass.push(newClass);
    classId++;
    console.log(listClass, classId);
    res.status(200).json({ message: 'Class added successfully', data: newClass });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while adding a class', error: error });
  }
});

module.exports = router;
