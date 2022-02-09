// Buttons
const teachersBtn = document.querySelector(".teachers");
const studentsBtn = document.querySelector(".students");
const groupsBtn = document.querySelector(".groups");
const courserBtn = document.querySelector(".courses");

//Tables
const teachers = document.getElementById("teacher-table");
const students = document.getElementById("student-table");
const groups = document.getElementById("groups-table");
const courses = document.getElementById("courses-table");

//Selects
const courseSelect = document.querySelector(".course-select");
const groupSelect = document.querySelector(".group-select");
const courseSelectGr = document.querySelector(".course-select-group");
const teacherSelectGr = document.querySelector(".teacher-select-tech");

teachersBtn.addEventListener("click", () => {
	teachers.style.display = "block";
	students.style.display = "none";
	groups.style.display = "none";
	courses.style.display = "none";
});

studentsBtn.addEventListener("click", () => {
	students.style.display = "block";
	teachers.style.display = "none";
	groups.style.display = "none";
	courses.style.display = "none";
});

groupsBtn.addEventListener("click", () => {
	groups.style.display = "block";
	students.style.display = "none";
	teachers.style.display = "none";
	courses.style.display = "none";
});

courserBtn.addEventListener("click", () => {
	courses.style.display = "block";
	students.style.display = "none";
	teachers.style.display = "none";
	groups.style.display = "none";
});

courseSelect.addEventListener("change", (e) => {
	let value = e.target.value;
	fetch("/api")
		.then((res) => res.json())
		.then((data) => {
			allGroups(data);

			function allGroups(groups) {
				groupSelect.innerHTML = "";
				const foundGroup = groups.filter((e) => e.coursename == value);
				foundGroup.map((group) => {
					const { groupname } = group;
					let option = document.createElement("option");
					option.value = groupname;
					option.innerHTML = groupname;
					groupSelect.appendChild(option);
				});
			}
		});
});

courseSelectGr.addEventListener("change", (e) => {
	let value = e.target.value;
	fetch("/api/v2")
		.then((res) => res.json())
		.then((data) => {
			allTeachers(data);

			function allTeachers(teachers) {
				teacherSelectGr.innerHTML = "";
				const foundTeacher = teachers.filter((e) => e.course == value);
				if (foundTeacher) {
					foundTeacher.map((teacher) => {
						const { username } = teacher;
						let option = document.createElement("option");

						option.value = username;
						option.innerHTML = username;
						return teacherSelectGr.appendChild(option);
					});
				}
			}
		});
});
