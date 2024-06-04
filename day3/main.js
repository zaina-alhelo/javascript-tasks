
//Task 1:

function sayHello(Name) {
    document.getElementById("p").innerHTML = `Hello,${Name}`;
};
sayHello("zaina");


//Task 2:
square = function (num) {
    return num ** 2;
}
console.log(square(5)); 
//Task 3:
multiply = (num1, num2) => { return num1 * num2; }
console.log(multiply(4, 5));  

//Task 4:
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
    getCarInfo: function () {
        return this.make + " " + this.model + " (" + this.year + ")";
  }
};
console.log(car.make); 
console.log(car.getCarInfo());  
 
//Task 5:
function printColors(colors) {
    for (let i = 0; i < colors.length; i++){
        console.log(colors[i]);
    }
};
let colors = ["Red", "Green", "Blue", "Black"];
printColors(colors);  

//Task 6:
function getStringLength(str) {
    return str.length;
}
console.log(getStringLength("Hello"));  
console.log(getStringLength("JavaScript"));  

//Task 7:
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("hello")); 
console.log(toUpperCase("world")); 


//Task 8:

function splitString(str, d) {
    let arr = str.split(d);
    return arr;
}



console.log(splitString("Hello,World", ",")); 
console.log(splitString("JavaScript is fun", " "));  
