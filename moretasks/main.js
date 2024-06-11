
// //task1
// function calculateArea(radius) {
//     let area = Math.PI * (radius ** 2);
//     return area;

// }
// console.log(calculateArea(5))
// console.log(calculateArea(10))

// //task2
//   let st = "";
// function reverseString (str) {

//     for (let i = str.length-1; i >=0; i--) {

//       st += str[i];
//     }
//   return st;
// };
// console.log(reverseString("hello"));

// //task3

// let filterEvenNumbers = (arr) => {
//     let ar = [];
//     for (let i in arr) {
//         if (arr[i] % 2 == 0) {
//             ar.push(arr[i]);
            
//       }
//     }
//     return ar;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(arr));


// //task4
// let i = 1;
// let library = {
//   books: [book = { title: "1234", author: "George Orwell" }],
//     addBook: function (title) {
//         i++;
//         this.books.push(title )
//         return this.books;
//     }
   
// };
// console.log(library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee" }));

// //task5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumArray(numbers) {
//     let sum = 0;
//     for (let i in numbers) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(sumArray(numbers));

// //task6
// function countVowels(str) {
//     counter = 0;
//     for (let i in str) {
//         if (str[i] == 'a' || str[i] == 'o' || str[i] == 'u' || str[i] == 'e' || str[i] == 'i') {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVowels('hello'));
// console.log(countVowels("javascript"));

// //task7
// function capitalizeWords(st) {
//     let strResult = "";
//     let ar = st.split(" ");
//     for (let i = 0; i < ar.length;i++) {
//         for (let charIndex = 0; charIndex < ar[i].length; charIndex++) {
//             if (charIndex == 0) {
//               strResult += ar[i][charIndex].toUpperCase();
//             } else {
//                 strResult += ar[i][charIndex];
//           }
//         }
//         strResult += " ";
//     }
    
//     return strResult;
// }
// console.log(capitalizeWords('hello world'));

// //task8
// function reverseWords(str) {
//     let ar = str.split(" ");
//     let ar2 = [];
//     for (let i = ar.length - 1; i >= 0; i--){
//         ar2.push(ar[i]);
//     }
    
//     return ar2;
// }
// console.log(reverseWords('Hello World'));
// console.log(reverseWords('JavaScript is fun'));







