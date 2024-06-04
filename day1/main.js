// let cash = 1000, current_liabilities = 500;
// console.log(cash / current_liabilities);
// let revenues = 1000, expenses = 500;
// console.log(revenues - expenses);
// let liabilities = 1000, equity = 500;
// console.log(liabilities + equity);
// let profit = 1000, sales = 500;
// console.log(profit * sales)
// //Sample Input: numbers: 7, 9, 2
// let x = 7, y = 9, z = 2;
// console.log((x+y+z)/3)
// let price = 150, discount = parseFloat("30%")/100;
// f=price*discount
// console.log(price-f)
// //•	Age limit (older than 18 and less than 30)
// age = 20;
// age_limit = age > 18 && age < 30;
// console.log(age_limit);
// // OR
// let result
// if (age > 18 && age < 30) {
//     result = true;
// }
// else {
//     result = false;
// }
// console.log(result);
// //•	Exponential
// console.log(2 ** 3);
// // OR
// console.log(Math.pow(2, 3))
// //•	Remainder
// console.log(10 % 4)
// ////////////Task 2
// console.log("*******TASK2**********")
// console.log(typeof (100));
// console.log(typeof (73.9));
// console.log(typeof (NaN));
// console.log(typeof ("Water"));
// console.log(typeof (false));
// console.log(typeof (9 != 11));
// console.log("Orang" + "e");
// console.log("Orange" - "s");
// console.log("4" + "8");
// console.log("4" - "8");
// console.log("name" + 3);
// console.log("name" - 3);
// console.log(82 * "word");
// console.log(1 + "hello");
// console.log("hello" + 1);
// console.log(1 + true);
// console.log("hello" + true);
// console.log(typeof (Infinity) );
// console.log(1 == '1');
// console.log(1 === '1');
// ////////////Task 3
// console.log("*******TASK3**********")

// let st = "Welcome to Orange";
// console.log(st.toUpperCase())
// console.log(st.slice(8,10).toUpperCase())
// console.log(st.replace("Welcome", "Hello from"));
// console.log(st.toLowerCase());
// console.log(st.length);
// console.log(st.replace("Orange", "\" Orange \""));
// console.log(st+" Jordan")

// ////////////Task 4
// console.log("*******TASK4**********")
// alert("welcome!!");
// ////////////Task 5
// console.log("*******TASK5**********")
// let string1 = "Hello";
// let number1 = 42;
// let boolean1 = true;
// let array1 = [1, 2, 3,"zaina"];
// let object1 = { name: "zaina", age: 20 };
// console.log(string1);
// console.log(number1);
// console.log(boolean1);
// console.log(array1);
// console.log(object1);
// ////////////Task 6
// console.log("*******TASK6**********")
// if (true) {
//     var varValue = "This is a var variable";
// }

// // console.log(varValue); // Accessible outside the block scope, will print "This is a var variable"


// // if (true) {
// //     let letValue = "This is a let variable";
// // }

// // console.log(letValue); // Not accessible outside the block scope, will throw ReferenceError: letValue is not defined
// ////////////Task 7
// console.log("*******TASK7**********")
// let a = 10, b = 5;
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus :", a % b);
// console.log("Greater than :", a > b);
// console.log("less than :", a < b);
// console.log(" Equal to:", a == b);
// console.log("Not Equal to:", a != b);
// console.log("Greater than or equal to:", a >= b);
// console.log("less than or equal to:", a <= b);
// console.log("AND:", a && b);
// console.log("OR:", a || b);
// console.log("NOT:", !a && !b);
// console.log("Add and assign:",a+=5);
// console.log("Subtract and assign:", (a -= 5));
// console.log(" Multiply and assign:", (a *= 5));
// ////////////Task 8
// console.log("*******TASK8**********")
// document.body.innerHTML += "<p>This message is displayed using innerHTML.</p>";
// document.write("<p>This message is displayed using document.write().</p>");
// window.alert("This message is displayed using window.alert().");
// console.log("This message is displayed using console.log().");


let age = 2000;

let result = (age < 10) ? 'baby' :
    (age < 20) ? 'hello' :
        (age < 100) ? 'welcome' : 'hhhh' ;
    alert(result)
