// let myElement = document.createElement("div");
// let text = document.createTextNode("my name is zaina alhelo");
// let attribute=document.createAttribute("ideas")
// let comment = document.createComment("this is div")



// myElement.className = "zaina";
// myElement.setAttribute("title","name")
// myElement.appendChild(text)
// myElement.appendChild(comment)

// myElement.setAttributeNode(attribute)


// console.log(myElement);

// for (let i = 0; i < 100; i++){
//     let element = document.createElement("div");
//     element.className = "product";
//     let h3 = document.createElement("h2");
//     let text = document.createTextNode(`this inside h3   =>${i+1}`) ;
//     let para = document.createElement("p");
//     let textPara = document.createTextNode(`this inside p  => ${i+1}`);
//     h3.appendChild(text);
//     para.appendChild(textPara);
//     element.appendChild(para);
//     element.appendChild(h3);
//     document.body.appendChild(element);
// }
//      let element = document.createElement("div");
//     element.className = "product";
//     let h3 = document.createElement("h2");
//     let text = document.createTextNode(`this inside h3   `) ;
//     let text2 = document.createTextNode(`lokmfklafklvmakmbqmboglb `) ;
//     let para = document.createElement("p");
//     let textPara = document.createTextNode(`this inside p  `);
//     h3.appendChild(text);
//     para.appendChild(textPara);
//     element.appendChild(para);
//     element.appendChild(text2);
//     element.appendChild(h3);
// document.body.appendChild(element);
//     console.log(element.children)
// console.log(element.childNodes)

// let but = document.getElementById("but")
// console.log(but)
// but.onclick=function () {
//     location.href="https://developer.mozilla.org/en-US/docs/Web/API#interfaces"
// }
    // location.href=
    //   "https://developer.mozilla.org/en-US/docs/Web/API#interfaces";



setTimeout(() => {
    console.log("hello")
},0)

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");











































// class A {
//   area(x, y) {
//     console.log(x * y);
//   }
// }
// class B extends A {
// area(a, b) {
//     super.area(a, b);
//     console.log("Class B");
// }
// }
// let ob = new B();
// let output = ob.area(100, 200);


// class Vehicle {
// 	constructor(name, maker, engine) {
// 		this.name = name;
// 		this.maker = maker;
// 		this.engine = engine;
// 	}
// 	getDetails() {
// 		return (`The name of the bike is ${this.name}.`)
// 	}
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name); // Hayabusa
// console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails());


// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }

//   #privateMethod() {
//     console.log('This is a private method.');
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
//     this.#privateMethod();
//     }
    

// }
// class emp extends Person{
//     display() {
//         console.log(emp);
//     }
// }

// let t = new emp

// const person = new Person("Bob", 25);
// person.greet();
// person.#name;
// person.#privateMethod();









//protected

// class Person {
//   _name;
//   _age;

//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
//   }
// }

// class Employee extends Person {
//   constructor(name, age, jobTitle) {
//     super(name, age);
//     this.jobTitle = jobTitle;
//   }

//   describeJob() {
//     console.log(`${this._name} is a ${this.jobTitle}.`);
//   }
// }

// const employee = new Employee("Charlie", 40, "Engineer");
// employee.greet();
// employee.describeJob();









// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//       console.log(`${this.name} barks.`);
//       super.speak()
//   }
// }

// class Cat extends Animal {
//   speak() {
//       console.log(`${this.name} meows.`);
//   }
// }

// let animal1 = new Dog("Dog");
// let animal2 = new Cat("Cat");
// animal1.speak();
// animal2.speak();







