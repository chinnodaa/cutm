const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');


// Only users with the role "instructor" can create a course
router.post('/add-course', authMiddleware, roleMiddleware('instructor'), (req, res) => {
    console.log("Route /admin/add-course accessed");  // need to be commented 
    adminController.addCourse(req, res);
});
router.post('/create-assignment', facultyController.createAssignment);
router.get('/assignments', facultyController.getAssignments);

module.exports = router;
