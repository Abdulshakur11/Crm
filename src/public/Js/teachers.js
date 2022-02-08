
const studentsBtn = document.querySelector('.students-btn');
const groupsBtn = document.querySelector('.groups-btn');

const studentTable = document.getElementById('student-table-first')
const groupTable = document.getElementById('student-table-second')

studentsBtn.addEventListener('click', () => {
  studentTable.style.display = "block";
  groupTable.style.display = "none"
})

groupsBtn.addEventListener('click', () => {
  groupTable.style.display = "block"
  studentTable.style.display = "none";
})
