const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/profile/:id', studentController.getProfile);
router.get('/courses/:id', studentController.getStudentCourses);

module.exports = router;
