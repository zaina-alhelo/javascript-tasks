//task 1
window.localStorage.setItem("hello", "Hello, World!");
console.log( window.localStorage.getItem("hello"));

//task 2
window.localStorage.setItem("num", JSON.stringify(123));
console.log(JSON.parse(window.localStorage.getItem("num")));

//task 3

window.localStorage.setItem("bool", JSON.stringify(true));
console.log(JSON.parse(window.localStorage.getItem("bool")));

//task 4
localStorage.removeItem("hello");

//task 5

window.localStorage.setItem("num1", JSON.stringify(123));
window.localStorage.setItem("num2", JSON.stringify(123));
window.localStorage.setItem("num3", JSON.stringify(123));
// localStorage.clear();
// task 6
// let x = prompt("Enter the key to check existence: ");
// if (x !== null) {
//   if (localStorage.getItem(x) !== null) {
//     alert("The item exists.");
//   } else {
//     alert("The item does not exist.");
//   }
// }

//task 7
window.localStorage.setItem("array", JSON.stringify([1,2,3,4]));
console.log(JSON.parse(window.localStorage.getItem("array")));

//task 8    
window.localStorage.setItem("obj", JSON.stringify({ name: "John", age: 30 }));
console.log(JSON.parse(window.localStorage.getItem("obj")));

//task 9
for (let i = 0; i < localStorage.length; i++){
    console.log(localStorage.key(i))
}
//task10
localStorage.setItem("num1", 567);
console.log(localStorage.getItem("num1"));





//Session Storage Tasks
//task1
window.sessionStorage.setItem("hello", "Hello, World!");
console.log(window.sessionStorage.getItem("hello"));

//task 2
window.sessionStorage.setItem("num", JSON.stringify(123));
console.log(JSON.parse(window.sessionStorage.getItem("num")));

//task3
window.sessionStorage.setItem("bool", JSON.stringify(true));
console.log(JSON.parse(window.sessionStorage.getItem("bool")));
//task4

sessionStorage.removeItem("hello");
//task5
window.localStorage.setItem("num1", JSON.stringify(123));
window.localStorage.setItem("num2", JSON.stringify(123));
window.localStorage.setItem("num3", JSON.stringify(123));
localStorage.clear();
// task 6

// let x = prompt("Enter the key to check existence: ");
// if (x !== null) {
//   if (sessionStorage.getItem(x) !== null) {
//     alert("The item exists.");
//   } else {
//     alert("The item does not exist.");
//   }
// }

//task 7
window.sessionStorage.setItem("array", JSON.stringify([1, 2, 3, 4]));
console.log(JSON.parse(window.sessionStorage.getItem("array")));

//task 8
window.sessionStorage.setItem("obj", JSON.stringify({ name: "John", age: 30 }));
console.log(JSON.parse(window.sessionStorage.getItem("obj")));

//task9
for (let i = 0; i < localStorage.length; i++) {
    console.log(sessionStorage.key(i))
}

//task 10

sessionStorage.setItem("num1", 789);
console.log(sessionStorage.getItem("num1"));

