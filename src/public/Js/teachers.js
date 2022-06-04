const deleteAllCookiesBtn = document.getElementById("log-out");
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


function deleteAllCookies() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
}

deleteAllCookiesBtn.onclick = () => {
	deleteAllCookies();
};