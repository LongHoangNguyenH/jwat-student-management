const router = require('express').Router();
const { listStudent, listClass } = require('../common/global.js');
const Student = require('../model/student.js');

// - 1 HS chỉ thuộc về duy nhất 1 class
// - Student Name không được phép trùng.
// - 1 HS phải thuộc về 1 class nào đó.

router.post('/create', (req, res) => {
  try {
    const { studentName, className, id } = req.body;

    if (listClass.find(cls => cls.className === className) === undefined) {
      res.status(400).json({ message: 'Class not found' });
    }

    for (const student of listStudent) {
      //kiểm tra student id trong list student
      if (student.id === id) {
        return res.status(400).json({ message: `Student already exists in class ${student.className}` });
      }
      //kiểm tra student có thuộc lớp nào không
      else if (listClass.find(cls => cls.className === className) === undefined) {
        return res.status(400).json({ message: `Class not found` });
      }
    }

    const newStudent = new Student(id, studentName, className);
    listStudent.push(newStudent);
    console.log(listStudent);
    res.status(200).json({ message: 'Student added successfully', data: newStudent });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while adding a student', error: error });
  }
});

// update student
router.put('/update/:id', (req, res) => {
  try {
    const { studentName, className } = req.body;
    const id = req.params.id;

    if (className !== '' && listClass.find(cls => cls.className === className) === undefined) {
      res.status(400).json({ message: 'Class not found' });
    } else if (className === '' || studentName === '') {
      return res.status(400).json({ message: 'Class name & Student name is required' });
    }

    indexStudent = listStudent.findIndex(student => student.id == id);

    if (indexStudent === -1) {
      return res.status(400).json({ message: 'Student not found' });
    }

    let updateStudent = listStudent[indexStudent];
    console.log(updateStudent);

    updateStudent = { studentName, className };
    console.log(updateStudent);

    res.status(200).json({ message: 'Student updated successfully', data: updateStudent });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occurred while updating a student', error: error });
  }
});

module.exports = router;
