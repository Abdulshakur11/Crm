const { verifyUser } = require("../lib/jwt");
const Fs = require("../lib/fsDeals");
//
const teachers = new Fs('../models/teachers.json'); 
const students = new Fs('../models/students.json'); 
const groups = new Fs("../models/groups.json");
const courses = new Fs("../models/courses.json");

module.exports = {
	ADMIN_GET: (req, res) => {
		const { token } = req.cookies;
		const { role } = verifyUser(token);

		if (role != "admin") {
			if(role == "admin") {
				return res.redirect('/admin')
			} else if(role == "student") {
				return res.redirect('/students')
			}else if(role == "teacher") {
				return res.redirect('/students')
			}
		} else {
			//
			const allTeachers = JSON.parse(teachers.read());
			const allStudents = JSON.parse(students.read());
			const allGroups = JSON.parse(groups.read());
			const allCourses = JSON.parse(courses.read());

			res.render("admin", {
				teachers: allTeachers,
				students: allStudents,
				groups: allGroups,
				courses: allCourses,
			});
		}
	}
};
