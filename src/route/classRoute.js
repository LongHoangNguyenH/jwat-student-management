const router = require('express').Router();
let { listClass, listStudent } = require('../common/global.js');
const Class = require('../model/class.js');
let { classId } = require('../common/global.js');

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
    listStudent.forEach(student => {
      if (student.className === updateClass.className) {
        student.className = className;
      }
    });
    updateClass.className = className;
    console.log(updateClass);
    res.status(200).json({ message: 'Class updated successfully', data: updateClass });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while updating a class', error: error });
  }
});

//delete a class
router.delete('/delete/:className', (req, res) => {
  try {
    const className = req.params.className;
    const indexClass = listClass.findIndex(cls => cls.className == className);

    if (indexClass === -1) {
      return res.status(400).json({ message: 'Class not found' });
    }

    //check student in class
    listStudent.forEach(student => {
      if (student.className === className) {
        return res.status(400).json({ message: 'Class cannot be deleted, student exist in this class' });
      }
    });

    console.log(listStudent);

    listClass.splice(indexClass, 1);
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while deleting a class', error: error });
  }
});

module.exports = router;
