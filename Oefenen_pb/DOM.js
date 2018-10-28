//Opdracht 1
var course1 = document.getElementById("course1");
var course2 = document.getElementById("course2");
var course3 = document.getElementById("course3");
var course4 = document.getElementById("course4");

td = document.getElementsByTagName("td");
csbcijfer = td[1].innerText;
pbcijfer = td[3].innerText;
slo = td[5].innerText;
gametypescript = td[7].innerText;

totaal = [csbcijfer, pbcijfer, slo, gametypescript];
console.log(totaal);

//Kan het gemiddelde niet pakken

//Opdracht 2
var course = document.getElementsByClassName("course");
var li = document.getElementsByTagName("li");

var i = 0;
var color = ["red", "blue", "yellow", "orange", "purple", "gray", "green"]
var random = color[Math.floor(Math.random() * color.length)];

function loop(event) {
for (i = 0; i<li.length;i++);
console.log(i);
}

li[i].style.backgroundColor = random;

loop();

