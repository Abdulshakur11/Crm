
// Buttons
const teachersBtn = document.querySelector('.teachers');
const studentsBtn = document.querySelector('.students');
const groupsBtn = document.querySelector('.groups');
const courserBtn = document.querySelector('.courses');

//Tables
const teachers = document.getElementById('teacher-table');
const students = document.getElementById('student-table');
const groups = document.getElementById('groups-table');
const courses = document.getElementById('courses-table');

//Selects
const courseSelect = document.querySelector('.course-select');

teachersBtn.addEventListener('click', () => {
  teachers.style.display = "block";
  students.style.display = "none";
  groups.style.display = "none"
  courses.style.display = "none"
})

studentsBtn.addEventListener('click', () => {
  students.style.display = "block";
  teachers.style.display = "none";
  groups.style.display = "none"
  courses.style.display = "none"
})

groupsBtn.addEventListener('click', () => {
  groups.style.display = "block"
  students.style.display = "none";
  teachers.style.display = "none";
  courses.style.display = "none"
})

courserBtn.addEventListener('click', () => {
  courses.style.display = "block"
  students.style.display = "none";
  teachers.style.display = "none";
  groups.style.display = "none"
});



// fetch('/api')
// .then(res => res.json())
// .then(data => allGroups(data))

// function allGroups(e) {
//   courseSelect.addEventListener('change', (e) => {
//     const value = e.target.value
//   })
//   let n = e.filter(x => x)
  
// }

window.onload = () => {
  let loader = document.getElementById('loader');
  loader.style.display = "none"
}
