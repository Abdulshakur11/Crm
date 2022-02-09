const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//Middalewares
const authMiddleware = require('../middlewares/authMiddleware');
const verifiedToken = require('../middlewares/verifyToken');

//Controllers
const { LOGIN_GET, LOGIN_POST } = require('./authController');
const { TEACHERS_POST, STUDENTS_POST, GROUPS_POST, COURSES_POST, HOMEWORKS_POST } = require('./modalControllers')
const { ADMIN_GET } = require('./adminController');
const { TEACHERS_GET } = require('./teachersController');
const { STUDENTS_GET } = require('./studentsController');

router
     .get('/', LOGIN_GET)
     .get('/admin', verifiedToken, ADMIN_GET)
     .get('/teachers', verifiedToken, TEACHERS_GET)
     .get('/students', verifiedToken, STUDENTS_GET)
     // All Posts here ↘
     .post('/login', authMiddleware, LOGIN_POST)
     .post('/addteachers', TEACHERS_POST)
     .post('/addstudents', STUDENTS_POST) 
     .post('/addgroups', GROUPS_POST)
     .post('/addcourses', COURSES_POST)
     .post('/sendhomework', HOMEWORKS_POST)
     .get('/api', (_, res) => {
       const allGroups = fs.readFileSync(path.resolve(__dirname, "../models/groups.json"));
       res.send(JSON.parse(allGroups));
     })
     .get('/api/v2', (_, res) => {
      const allTeachers = fs.readFileSync(path.resolve(__dirname, "../models/teachers.json"));
      res.send(JSON.parse(allTeachers));
    })

module.exports = router;