const { verifyUser } = require('../lib/jwt');
const Fs = require('../lib/fsDeals');
//models
const students = new Fs("../models/students.json");
const groups = new Fs('../models/groups.json');
const homeworks = new Fs('../models/homework.json');

module.exports = {
  STUDENTS_GET: (req, res) => {
    const { token } = req.cookies;
    const {role, username} = verifyUser(token);
    if(role != "student") {
      if(role == "admin") {
				return res.redirect('/admin')
			} else if(role == "student") {
				return res.redirect('/students')
			}else if(role == "teacher") {
				return res.redirect('/students')
			}
    } else {
      const allStudents = JSON.parse(students.read());
      const allGroups = JSON.parse(groups.read());
      const allHomeworks = JSON.parse(homeworks.read());
      //
      const foundStudent = allStudents.find(student => student.username == username);
      const foundGroup = allGroups.filter(group => group.groupname == foundStudent.groupname);
      const foundHomework = allHomeworks.filter(hm => hm.groupname == foundGroup[0].groupname);
      
        res.render('students', {
        username,
        groups: foundGroup,
        homeworks: foundHomework
      })
    }
  }
}