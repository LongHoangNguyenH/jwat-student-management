const router = require('express').Router();
let { listClass } = require('../common/global.js');
const Class = require('../model/class.js');


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

// get a class
router.get('/:id', (req, res) => {
  try {
    const classId = parseInt(req.params.id, 10);
    const getClass = listClass.find(cls => cls.id === classId);
    if (!getClass) {
      return res.status(400).json({ message: 'Class not found' });
    }
    res.status(200).json({ message: 'Class found', data: getClass });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while getting a class', error: error });
  }
});

//update a class
router.put('/update/:id', (req, res) => {
  try {
    const { className } = req.body;
    const classId = parseInt(req.params.id, 10);
    const indexClass = listClass.findIndex(cls => cls.id == classId);

    if (indexClass === -1) {
      return res.status(400).json({ message: 'Class not found' });
    }

    const updateClass = listClass[indexClass];
    console.log(updateClass);

    updateClass.className = className;
    console.log(updateClass);
    res.status(200).json({ message: 'Class updated successfully', data: updateClass });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while updating a class', error: error });
  }
});

module.exports = router;
