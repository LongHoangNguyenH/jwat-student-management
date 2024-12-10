const router = require('express').Router();
let { listStudent, listClass, studentId } = require('../common/global.js');
const Student = require('../model/student.js');

router.post('/', (req, res) => {
  try {
    const { studentName, className } = req.body;
    if (studentName === '' || className === '') {
      return res.status(400).json({ message: 'Student name, class name is required' });
    }

    if (listClass.find(cls => cls.className == className) === undefined) {
      return res.status(400).json({ message: `Class not found` });
    }

    for (const student of listStudent) {
      if (student.id === studentId || student.studentName === studentName) {
        return res.status(400).json({ message: `Student already exists in class ${student.className}` });
      }
    }

    const newStudent = new Student(studentId, studentName, className);
    listStudent.push(newStudent);
    studentId++;
    console.log(listStudent);
    return res.status(200).json({ message: 'Student added successfully', data: newStudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while adding a student', error: error });
  }
});

// update student
router.put('/:id', (req, res) => {
  try {
    let { studentName, className } = req.body;
    const id = req.params.id;

    if (className !== '' && listClass.find(cls => cls.className === className) === undefined) {
      return res.status(400).json({ message: 'Class not found' });
    } else if (className === '' && studentName === '') {
      return res.status(400).json({ message: 'Enter the field you want to update' });
    }

    indexStudent = listStudent.findIndex(student => student.id == id);

    if (indexStudent === -1) {
      return res.status(400).json({ message: 'Student not found' });
    }

    let updateStudent = listStudent[indexStudent];

    if (studentName === '') studentName = updateStudent.studentName;
    if (className === '') className = updateStudent.className;

    console.log(studentName, className);

    listStudent[indexStudent] = { studentName, className, id };

    console.log('final', listStudent[indexStudent]);

    return res.status(200).json({ message: 'Student updated successfully', data: listStudent[indexStudent] });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while updating a student', error: error });
  }
});

//Retrieve a student by id
router.get('/:id', (req, res) => {
  try {
    const id = req.params.id;
    const selectedStudent = listStudent.find(student => student.id == id);
    if (!selectedStudent) {
      return res.status(400).json({ message: 'Student not found' });
    }
    return res.status(200).json({ message: 'Student found', data: selectedStudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while getting a student', error: error });
  }
});

//get all students
router.get('/', (req, res) => {
  try {
    if (listStudent.length === 0) {
      return res.status(400).json({ message: 'No student found' });
    }
    return res.status(200).json({ message: 'Students found', data: listStudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while getting students', error: error });
  }
});

//get students by class
router.get('/class/:className', (req, res) => {
  try {
    let classByName = [];
    const className = req.params.className;
    console.log(classByName);
    if (classByName === '') {
      return res.status(400).json({ message: 'Class name is required' });
    }
    listStudent.filter(student => {
      if (student.className === className) {
        classByName.push(student);
      }
    });
    return res.status(200).json({ message: 'Students found by class', data: classByName });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while getting students by class', error: error });
  }
});

//get student by name
router.get('/name/:studentName', (req, res) => {
  try {
    const studentName = req.params.studentName;
    if (studentName === '') {
      return res.status(400).json({ message: 'Student name is required' });
    }
    searchLike = [];
    listStudent.filter(student => {
      if (student.studentName.toLowerCase().includes(studentName.toLowerCase())) {
        searchLike.push(student);
      }
    });
    return res.status(200).json({ message: 'Students found by name', data: searchLike });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while getting student by name' });
  }
});

//delete a student
router.delete('/:id', (req, res) => {
  try {
    const id = req.params.id;
    const indexStudent = listStudent.findIndex(student => student.id == id);
    if (indexStudent === -1) {
      return res.status(400).json({ message: 'Student not found' });
    }
    listStudent.splice(indexStudent, 1);
    console.log(listStudent);
    console.log(listClass);
    return res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error occurred while deleting a student', error: error });
  }
});
module.exports = router;
