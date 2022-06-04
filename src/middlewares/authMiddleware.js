const Fs = require('../lib/fsDeals');
const { signUser } = require('../lib/jwt');
//models
const admins = new Fs('../models/admin.json'); 
const teachers = new Fs('../models/teachers.json'); 
const students = new Fs('../models/students.json'); 

module.exports = (req, res, next) => {
  try{
    const { username, password } = req.body;

    const allAdmins = JSON.parse(admins.read());
    const allTeachers = JSON.parse(teachers.read());
    const allStudents = JSON.parse(students.read());

    const foundAdmin = allAdmins.find(admin => admin.username == username && admin.password == password);
    const foundTeacher = allTeachers.find(teacher => teacher.username == username && teacher.password == password);
    const foundStudent = allStudents.find(student => student.username == username && student.password == password);

    
    if(!foundAdmin && !foundTeacher && !foundStudent) {
      res.status(401).send({
        message: "User not found"
      });
    } 
    
    if(foundAdmin){
      req.body = foundAdmin
      res.cookie("token", signUser({id: foundAdmin.id, username: foundAdmin.username, role: foundAdmin.role}));
    } else if(foundTeacher) {
      req.body = foundTeacher
      res.cookie("token", signUser({id: foundTeacher.id, username: foundTeacher.username, role: foundTeacher.role}));
    }else if(foundStudent) {
      req.body = foundStudent
      res.cookie("token", signUser({id: foundStudent.id, username: foundStudent.username, role: foundStudent.role}));
    } 
    next()

  } catch(err) {
    console.log(err);
  }
}