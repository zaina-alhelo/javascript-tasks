//Question 1
let num="";
for (let i = 1; i <= 10; i++)
{
    num += i + " ";
}
console.log( num +"by for loop");

//Question 2
let i = 1;
num = "";
while (i <= 10) {
    num += i + " ";
    i++;
}
console.log(num + "by while loop");

//Question 3
even = "";
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
         even += i + " ";
    }
 
}
console.log( "Even Number:"+ even);


//Question 4
sum = 0;
for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log("sum :" + sum);

//Question 5
odd = '';
for (let i = 0; i <= 10; i++){
    if (i % 2 != 0) {
        odd += i + " ";
    }

}
console.log("odd number:" + odd);
    
//Question 6
let age = 27;
if (age > 18) {
    console.log("You are an adult");
}
//Question 7
score = 45;
if (score <= 50) {
    console.log("You failed the test");
}
//Question 8 
Name = "John";
if (Name == "John") {
    console.log("Hello,"+Name)
}

//Question 9
day = "Monday";
if (day != "Saturday" || day != "Friday") {
    console.log("It's a weekday");
}

//Question 10
num = 4;
if (num % 2 == 0) {
    console.log("The number is even");
}
//Question 11
x = 5;
if (x > 0) {
    console.log("x is a positive number");
}
else if (x < 0) {
    console.log("x is a negative number");
}
else {
    console.log("zero")
}
//Question 12
y = -5;
if (y > 0) {
  console.log("y is a positive number");
} else if (y < 0) {
  console.log("y is a negative number");
} else {
  console.log("zero");
}
//Question 13
gpa = 3.5;
if (gpa >= 3.0) {
    console.log("Congratulations, you have a good GPA!");
}
//Question 14
n = 10;
f = 0;
if (n <= 1) {
    console.log(false)
}

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            console.log(false);
            f = 1;
        }
    }
if (f == 0) {
    console.log(true);
}