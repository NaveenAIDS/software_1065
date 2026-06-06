async function getData() {

const response = await fetch("http://localhost:5000/student");

const data = await response.json();

document.getElementById("result").innerHTML =
"Name: " + data.name +
"<br>Course: " + data.course;

}