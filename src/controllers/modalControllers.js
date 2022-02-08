const Fs = require("../lib/fsDeals");
//Models
const teachers = new Fs("../models/teachers.json");
const students = new Fs("../models/students.json");
const groups = new Fs("../models/groups.json");
const courses = new Fs("../models/courses.json");
const homeworks = new Fs("../models/homework.json");

module.exports = {
	TEACHERS_POST: (req, res) => {
		const teacher = req.body;
		const allTeachers = JSON.parse(teachers.read());

		allTeachers.push({
			id: allTeachers.length + 1,
			...teacher,
			password: teacher.phone_number,
			role: "teacher",
		});

		teachers.write(allTeachers);

		res.redirect("/admin");
	},

	STUDENTS_POST: (req, res) => {
		const student = req.body;
		const allStudents = JSON.parse(students.read());

		allStudents.push({
			id: allStudents.length + 1,
			...student,
			password: student.phone_number,
			role: "student",
		});

		students.write(allStudents);

		res.redirect("/admin");
	},

	GROUPS_POST: (req, res) => {
		const group = req.body;
		const allGroups = JSON.parse(groups.read());

		allGroups.push({ id: allGroups.length + 1, ...group });
		groups.write(allGroups);
		res.redirect("/admin");
	},

	COURSES_POST: (req, res) => {
		const course = req.body;
		const allCourses = JSON.parse(courses.read());
		allCourses.push({ id: allCourses.length + 1, ...course });
		courses.write(allCourses);
		res.redirect("/admin");
	},

	HOMEWORKS_POST: (req, res) => {
		const homework = req.body;

		const allHomeworks = JSON.parse(homeworks.read());
		allHomeworks.push({ id: allHomeworks.length + 1, ...homework});
		homeworks.write(allHomeworks);
		res.redirect("/teachers");
	},
};
