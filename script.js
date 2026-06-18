
function calculateCGPA(){

let s1=parseFloat(document.getElementById("s1").value);
let s2=parseFloat(document.getElementById("s2").value);
let s3=parseFloat(document.getElementById("s3").value);

let cgpa=((s1+s2+s3)/3).toFixed(2);

document.getElementById("cgpaResult").innerHTML=
"CGPA = " + cgpa;
}

function calculateAttendance(){

let present=parseInt(document.getElementById("present").value);
let absent=parseInt(document.getElementById("absent").value);

let percentage=
(present/(present+absent))*100;

document.getElementById("attendanceResult").innerHTML=
"Attendance = " + percentage.toFixed(2) + "%";
}

function addTask(){

let task=document.getElementById("taskInput").value;

let li=document.createElement("li");

li.textContent=task;

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";
}

function generatePlan(){

let subject=
document.getElementById("subject").value;

let date=
document.getElementById("examDate").value;

document.getElementById("studyPlan").innerHTML=
"Prepare " + subject +
" daily until " + date +
". Focus on important units first.";
}

function toggleMode(){
document.body.classList.toggle("dark");
}

function showQuote(){

const quotes=[
"Success is the sum of small efforts.",
"Believe in yourself.",
"Never stop learning.",
"Dream big and work hard.",
"Stay consistent."
];

let random=
Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML=
quotes[random];
}