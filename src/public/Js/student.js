const studentTable = document.getElementById('student');
const homeworksTable = document.getElementById('homeworks-table');


const groupsBtn = document.querySelector('.groups-btn');
const homeworkBtn= document.querySelector('.homework-btn');

groupsBtn.addEventListener('click', () => {
  studentTable.style.display = "block";
  homeworksTable.style.display = "none";
})


homeworkBtn.addEventListener('click', () => {
  studentTable.style.display = "none";
  homeworksTable.style.display = "block";
})