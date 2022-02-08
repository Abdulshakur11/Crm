const { verifyUser } = require('../lib/jwt');
const Fs = require('../lib/fsDeals');
//
const admins = new Fs('../models/admin.json'); 
const teachers = new Fs('../models/teachers.json'); 
const students = new Fs('../models/students.json'); 

module.exports = (req, res, next) => {
  try{  
    const { token } = req.cookies;
    
    if(!token) {
      res.redirect('/'); 
    } else{
      const { username, id} = verifyUser(token);
      //
      const allAdmins = JSON.parse(admins.read());
      const allTeachers = JSON.parse(teachers.read());
      const allStudents = JSON.parse(students.read());
      //
      const foundAdmin = allAdmins.find(admin => admin.username == username && admin.id == id);
      const foundTeacher = allTeachers.find(teacher => teacher.username == username && teacher.id == id);
      const foundStudent = allStudents.find(student => student.username == username && student.id == id);

      if(!foundAdmin && !foundTeacher && !foundStudent) {
        res.redirect('/'); 
      } else {
        next();
      } 
    }

  } catch(err) {
    res.json({
      message: "Failed to authenticate token"
    })
  }
  
}