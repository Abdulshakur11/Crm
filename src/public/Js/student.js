const studentTable = document.getElementById('student');
const homeworksTable = document.getElementById('homeworks-table');
const deleteAllCookiesBtn = document.getElementById("log-out");


const groupsBtn = document.querySelector('.groups-btn');
const homeworkBtn= document.querySelector('.homework-btn');

groupsBtn.addEventListener('click', () => {
  studentTable.style.display = "block";
  homeworksTable.style.display = "none";
})


homeworkBtn.addEventListener('click', () => {
  studentTable.style.display = "none";
  homeworksTable.style.display = "block";
});



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