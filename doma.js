// alert("hello");
// console.log("wau");

// var b = "smothie";
// console.log(b)

// var somenumber = 45;
// console.log(somenumber);

// document.getElementById("sometext").innerHTML = "Hey there";

// var age = prompt("what is your age?");
// document.getElementById("sometext").innerHTML = age;

// var num1 = 10;
// num1 = num1 + 1
// num1++
// num1--
// console.log(num1 / 6);
// num1 +=10;
// console.log(num1);

/* Functions
 */
// function fun() {
// alert("this is a function");
// }
//
// fun();


// function greeting(){
//   var jmeno = prompt("jake je tvoje jmeno? ");
//   result = console.log("tvoje jméno je" + " " + jmeno);
// }
//
// greeting();

// function sumNumbers(num1, num2){
//   var result = num1 + num2;
//   console.log(num1+ num2);
// }
//
// sumNumbers(10, 10);


// num = 0
// while (num < 100) {
//   num += 1;
//   console.log(num);
// }


// for (let num = 0; num<=100; num++) {
//   console.log(num);
// }

/* data types
let yourAge = 18;   // number
let yourName = "bob";   //string
let name = {first: "jane", last: "Doe"}; //object
let truth = false; //boolean
let groceris = ["apple", "banana", "oranges"]; //
let random; //undefined
let nothing = null; //value null
*/


// let fruit = "banana, apple, orange, blackberry";
// let morefruits = "banana\napple";
// console.log(fruit.type);
// console.log(fruit.indexOf("b"));
// console.log(fruit.replace("ban", "123"));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit[2]);
// console.log(fruit.split(","));
// console.log(fruit.split(""));
// console.log(typeof fruit);
// let x = "meda"
// console.log(xs.indexOf("m"));

let fruits = ["banana", "apple", "orange", "pineapples"];
// fruits = new Array("banana", "apple", "orange", "pineapples")
// for (let i = 0; i < fruits.length; i++) {
//       console.log(fruits[i]);
// }
// console.log(typeof fruits);
// console.log(fruits.length);
// console.log(fruits.push("blackberry"), fruits);
// console.log(fruits[4]);
// fruits.shift();  /*shift sebere prvni element unshift prida prvni element */
// console.log(fruits[3]);
// fruits.unshift("kiwi");
// let vegetables = ["asparagus", "tomato", "broccoli"];
// let allgroceries = fruits.concat(vegetables);
// console.log(allgroceries);
// console.log(allgroceries.slice(1, 4));
// console.log(allgroceries.reverse());
// console.log(allgroceries.sort());
// let someNumbers = [5, 10, 2, 25, 3, 255]
// console.log(someNumbers.sort(function(a, b) {return a-b}));
// let emptyArray = new Array();
// for (let num = 0; num < 10; num++) {
//   emptyArray.push(num);
// }
// console.log(emptyArray)
//
// let x = [];
// for (let i =0; i<10; i++) {
//   x.push(i);
// }
// console.log(x);
// alert(fruits[0]);
// fruits[0] = "pear";
// alert(fruits[0]);

// console.log("to string", fruits.toString());
// console.log(fruits.join("*"));
// console.log(fruits.pop(), fruits);



  // let student = {first: "refew",
  //               second: "rahul",
  //               age: 25,
  //               height: 170,
  //               studentinfo: function() {
  //                 return this.first + " " + this.second + " " + this.age + " " + this.height;
  //               }
  //              };
  // console.log(student.first);
  // console.log(typeof student);
  // student.first = "jouda";
  // console.log(student.first);
  // console.log(student.studentinfo());


  // var person = {
  //   firstName: "John",
  //   lastName : "Doe",
  //   id       : 5566,
  //   fullName : function() {
  //     return this.firstName + " " + this.lastName;
  //   }
  //

let age = prompt("enter your age: ")
if ((age >=18) && (age <=35)) {
  status = "target demo";
  console.log(status);
} else   {
  status = "not my audience";
  console.log(status);
}
