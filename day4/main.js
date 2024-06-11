//task 1
let header = document.getElementById("header");
header.innerHTML = "Welcome to DOM Manipulation!";
header.style.color = "pink";


//task2
let element = document.getElementsByClassName("item");
for (let i = 0; i < element.length; i++) {
  element[i].innerHTML = "Class Item";
  element[i].style.border = "2px solid green";
}

//task 3
let tags = document.getElementsByTagName("p")
for (let i = 0; i < tags.length;i++) {
  tags[i].innerHTML = "Paragraph Element";
  tags[i].style.fontSize = "20px";
  tags[i].style.fontSize = "20px";
}

//task4
let word = document.querySelector("h4")
word.innerHTML = "First Highlighted Item";
word.style.fontSize = "20px";
word.style.background = "yellow";


//task5
let all = document.querySelectorAll("li");

for (let i in all) {
    all[i].innerHTML = "List Item";
  
}


//task6
document.querySelector("#footer").innerHTML = "Footer Updated";

//task 7
let qclass = document.querySelectorAll(".box");
for (let i in qclass) {
    qclass[i].innerHTML = "Box Item";
    // qclass[i].style.color = "Red";
}

//task 8
document.querySelector(".container a").textContent = "Combining Selectors ";
//task9
document.querySelector("[data-role='admin']").textContent = "Admin Role";

//task 10
let section = document.getElementsByTagName("section");
console.log(span);
for (let i in span) {
    span[i].innerHTML = "Span Element";
}
