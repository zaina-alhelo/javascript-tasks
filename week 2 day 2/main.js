//task 1
// let ar = [10, 20, 30, 40, 50];
// let x =ar.map(function(ele){
//     return ele * 2;})
// console.log(x);

//task 2
// let y=ar.filter(function (ele) {
//     return ele > 10;
// })
// console.log(y);

//task 3
// let arr = ["zaina", "saeed"];
//   arr.forEach(function (ele) {

//     console.log(ele.toUpperCase());

// })

//task 4

let obj = [
  {
    Name: "zaina",
    age: 20,
  },
  {
    Name: "saja",
    age: 21,
  },
  {
    Name: "nada",
    age: null,
  },
  {
    Name: "joy",
    age: 25,
  },
];
// let array=obj.map(function (ele) {
//     return ele.Name;
// })
// console.log(array)

//task 5
// let array2 = obj.filter(function (ele) {
//   return ele.age > 21;
// });
// console.log(array2);

//task 6
let ar2 = [10, 20, 30, 40, 50];
// let sum = 0;
// let z = ar2.forEach(function (ele) {
//   sum += ele;
// });
// console.log(sum);

//task 7

let strings = ["helloa!", "aworld", "javascript"];
// console.log(
//   strings.map(function (ele) {
//     return ele.split("").reverse().join("");
//   })
// );

//task 8
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11];
// console.log(arr2.filter(isPrime));
// function isPrime(num) {
//   let isPrime = true;
//   if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   } else {
//     isPrime = false;
//   }
//   return isPrime;
// }

//task 9
let bool = [true, false, false, true];
// bool.forEach(function (ele, ind) {
//   console.log("item =>", ele, "index =>", ind);
// });

//task 10

// let st = arr2.map((ele) => String(ele));
// console.log(st);

//task 11

let ar3 = [1, 1, 2, 4, 5, 8, 4, 7, 3, 1, 2, 4];

// console.log(
//   ar3.filter((value, index, array) => {
//     return array.indexOf(value) === index;
//   })
// );

//task 12
// obj.forEach(function (ele) {
//   console.log("name", ele.Name);
//   console.log("age", ele.age);
// });

//task 13

// let ar4 = strings.map(function (ele, ind) {
//   return ele + " " + ind;
// });
// console.log(ar4);

//task 14
// let ar5 = arr2.filter((ele) => ele % 2 == 0);
// console.log(ar5);
//task 15
// arr2.forEach(function (num) {
//     console.log(num*2)
// })
//task 16
// let ar6 = arr2.map((ele, ind) => ele + ind);
// console.log(ar6);

//task 17
// let ar7 = obj.filter(function (ele) {
//   return ele.age > 5;
// });
// console.log(ar7);

//task 18
// strings.forEach(function (ele) {
//   console.log(ele.length);
// });
//task 19
// let ar8 = strings.map((ele) => ele.toUpperCase());
// console.log(ar8);

//task 20
// let avg = arr2.reduce((sum, num) => sum + num, 0) / arr2.length;

// let ar9 = arr2.filter(function (ele) {
//   return ele > avg;
// });
// console.log(ar9);

//task 21
// arr2.forEach(function (num) {
//     console.log(num/2)
// })

//task 22
// console.log(arr2.map((ele) => Math.abs(ele)));

//task 23
console.log(
  obj.filter((obj) => {
    for (let key in obj) {
      if (obj[key] === null ) {
        return false;
      }
    }
    return true;
  })
);

//task 24
// let count = 0;
// strings.forEach(function (str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       count++;
//     }
//   }
// });
// console.log(count);

//task 25
// console.log(arr2.map((ele) => ele % 3));

//task 26
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   numbers.filter((number) => {
//     return Math.sqrt(number) % 1 === 0;
//   })
// );

//task 27
// const stringObjects = [];

// strings.forEach(function (str) {
//   const obj = {
//     string: str,
//     length: str.length,
//   };
//   stringObjects.push(obj);
//   console.log(`String: ${obj.string}, Length: ${obj.length}`);
// });
//task 28
// console.log(strings.map((ele) => ele.repeat(2)));
//task 29
// let med = arr2.length / 2;
// console.log(med);
// console.log(
//   arr2.filter(function (ele) {
//     return ele < med;
//   })
// );
//task 30
// let array3 = [];
// arr2.forEach(function (ele) {
//   array3.push(Math.sqrt(ele));
// });
// console.log(array3);
//task 31
// console.log(obj.map((ele) => (ele["bool"] = true)));
//task 32
// let mix = [0, 1, "", "hello", null, undefined, true, false];
// console.log(mix.filter((ele) => ele));
//task 33
let number = [1, 2, 3, 4, 5];
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// number.forEach((ele) => console.log(factorial(ele)));
//task 34
// function log(callback) {
//   callback();
// }
// function show() {
//   console.log(" callback function");
// }
// log(show);

//task 35
// function logs(callback, array) {
//        array.forEach((ele) => callback(ele)
//        );

// }
// function show1(ele) {
//   console.log(ele);
// }
// logs(show1,arr2);

//task 36
// function higher(callback, num) {
//   return callback(num);
// }
// function multi(num) {
//   return num * 5;
// }

// console.log(higher(multi, 6));

//task 37
// function higherord(pos, neg, num) {
//   if (num % 2 == 0) {
//     return pos();
//   } else {
//     return neg();
//   }
// }
// function positive() {
//   console.log("positive number");
// }
// function negative() {
//   console.log("negative number");
// }
// higherord(positive, negative, -5);

//task 38

// function applyCallbackToEachElement(array, callback) {
//   const New = [];
//   array.forEach((element) => {
//     New.push(callback(element));
//   });

//   return New;
// }
// function double(number) {
//   return number * 2;
// }
// const resultArray = applyCallbackToEachElement(arr2, double);
// console.log("Result array:", resultArray);

//task 39
// function twice(callback) {
//   callback();
//   callback();
// }
// function hello() {
//   console.log("hello!");
// }
// twice(hello);
//task 40

function higherorder(func, times) {
  return function (num) {
    for (let i = 0; i < times; i++) {
      num = func(num);
    }
    return num;
  };
}
function add(NUM) {
  return NUM + 3;
}
let y = higherorder(add, 3);
console.log(y(1 ));
