const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');


router.post('/add-user',authMiddleware,roleMiddleware('admin'),(req,res)=>{
    console.log("Route /admin/add-user accessed");   // need to be commented
    authController.register(req, res);
})
router.get('/courses', adminController.getCourses);

module.exports = router;
