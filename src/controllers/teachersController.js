const { verifyUser } = require('../lib/jwt');
const Fs = require("../lib/fsDeals");
//
const teachers = new Fs("../models/teachers.json");
const groups = new Fs('../models/groups.json');
const students = new Fs('../models/students.json') 

module.exports = {
  TEACHERS_GET: (req, res) => {
    const { token } = req.cookies;
    const {role, username} = verifyUser(token);
    if(role != "teacher") {
      if(role == "admin") {
				return res.redirect('/admin')
			} else if(role == "student") {
				return res.redirect('/students')
			}else if(role == "teacher") {
				return res.redirect('/students')
			}
    } else {
      const allTeachers = JSON.parse(teachers.read());
      const allGroups = JSON.parse(groups.read());
      const allStudents = JSON.parse(students.read());

      const foundGroup = allGroups.filter(group => group.teachername == username);
      const n = foundGroup.map(e => e.groupname);
      // ustozga faqat to'rta guruh beriladi ↘
      const foundStudent = allStudents.filter(e => e.groupname == n[0] ||  e.groupname == n[1] ||  e.groupname == n[2] ||  e.groupname == n[3]);
    
      res.render('teachers', {
        username,
        groups: foundGroup,
        students: foundStudent,
        teachers: allTeachers
      })
    }
  }
  
}