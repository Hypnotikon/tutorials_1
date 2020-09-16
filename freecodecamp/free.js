
// 7 data types = 1) undefinied 2)null 3)boolean 4)string 5)symbol 6)number 7)object

// var myName = "Beau" throught whole program
//
// myName = 8
//
// let ourName = "freecodedcamp" throught scope
//
// const pi = 3.14 cant change
//
// declaring and assignment variables
//
// var a;          declaring
// var b = 2;      assigment var a =2;

// var firstName = "alan";
// var secondName = "Turing";

// escape character

// var supr = "jak se\\\\\\ vede kámo a co děláš";
// var ourStr = "I come first." + "I come second";
// ourStr += supr;
// var ourStrlen = 0;
// ourStrlen = ourStr.length;
// console.log(ourStrlen);

// var firstletter = "";
// var name = "ada;"
// firstletter = name[1];
// console.log(firstletter)

// var fist = "ada";
// var lastletter = fist[fist.length-1];
// console.log(lastletter);

// function madlips(mynoun, myadjetive, myverv, myadverb) {
//   var result = "";
//   var result = "the " + mynoun +" "+ myadjetive +" "+ myverv +" "+ myadverb;
//   return result;
// }
// console.log(madlips("čau", "jak", "je", "tupce"))
// var string = ("ahoj jak se vede ")
// string += string;
// console.log(string);

// var ourArray = [["John", 23], ["jeff", 25]];

// var array = [50, 71 ,81];
// array[0] = 55;
// var pukk = array;
// array += "," + pukk;
// console.log(pukk);
// console.log(array);

// var myarray = [[10,11,12], [5,7,8], [77,8,19], [[7,85,6], 7, 8]];
// var data = myarray[4][0];
//
// console.log(data);

// var our = ["nazdar", "bazdar"];
// var ourall = our.push("čus");
// var popin = our.pop();
// var remove = our.shift();
// var back = our.unshift("bum");
// console.log(our);

// function mad(my, your, yours, yom){
//   var x = my + your + yours + yom;
//   return x;
// }
// console.log(mad("čau","jak","se","vede"));



// var d = new Date(0);
// document.getElementById("demo").innerHTML = d;

// var myArray = [];
// var x = 0;
// while (x < 5){
//   myArray.push(x);
//   x++;
// }
// console.log(myArray);

// var pole = [];
// for (var i = 0; i < 5; i++){
//   pole.push(i)
// }
// console.log(pole);


// var pole =  [];
//
// for (var i = 10; i > 0; i-=2 ){
//   pole.push(i);
// }
// console.log(pole);

// var our =  [9, 10, 11, 12];
// var total = 0;
//
// for (var i = 0; i < our.length; i++){
//   total += our[i];
// }
// console.log(total)


// var our = [1, 7, 8, 16, 5];
// var x = Math.sum(...our);
//
// console.log(x);


// const numbers =  [5, 10, 13, 18];
// var a = 0;
// for (let o of numbers){
//   a += o;
// }
// console.log(a);
//
// const number = [5, 15, 13, 18];
// var x = number.reduce((accumulator, currentValue) => { return accumulator + currentValue},);
//
// console.log(x);

// var numbers = [5, 10, 15, 20];
// var x = 0;
//
// for (var i = 0; i < numbers.length; i++){
//   x += numbers[i];
// }
// console.log(x);


// var total = 0;
//
// for(var i = 0; i < our.length; i++){
//   total += our[i];
// }
// console.log(total);

// const - value that never changes

//
// var pi = 3.14;
// pi = 5;
//
// // let is for block
//
// for(var i = 0; i < 3; i++) {
//   console.log(i)
// }


// var x =  [5, 10, 15, 20];
// var y = 0;
// for (var i = 0; i < x.length; i++){
//   y *= x[i];
// }

// var y = x.reduce((accumulator, currentvalue) => {return accumulator - currentvalue},0);
//
//
// console.log(y)

// var x = [5, 10 ,15];
// var y = 1;
// for (var i = 0; i< x.length; i++){
//   y *= x[i];
// }
// console.log(y);


// var product = [[1, 5],[5, 3], [8,9]];
// console.log(product[0][0]);
// var i = 0;
// var pole = [];
// while (i < 10){
//   i++
//   pole.push(i)
//   i++
// }
// console.log(pole);

// var x =  {
//   "name": "kristin",
//   "surname":"ronald",
//   "age":"25",
// }
//
// function find(name, prop){
//   return x[name];
// }
// console.log(find("kristin", "age"));


// function randomFraction() {
//
//   return Math.random();
// }
// console.log(randomFraction());


// var randomNumberBetween = Math.floor(Math.random() * 20);
// function rando() {
//   return Math.floor(Math.random() * 20);
// }
// console.log(rando());

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min) + ;
// }
//
// console.log(random(1, 3));


  // var x = "5";
  // console.log(typeof x);
  // x = parseInt(x);
  // console.log(x);
  // console.log(typeof x);


// function ex(a, b) {
//   if (a === b) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(ex(1, "1"));

// function op(a, b){
//   return a === b;
// }
// console.log(op(1, 2))

// function chek(num) {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }
//
// console.log(chek(5));

// function x(){
//   if (true){
//     let i = "Moniko";
//     console.log("ahoj " + i);
//   }
//   console.log("ahoj " + i);
// }
//
// x();


// var x = Math.floor(Math.random() * 3 + 1);
// console.log(x);

// const s =  [5, 10, 15];
// function place() {
//
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
// }
// place()
// console.log(s);

// const o = {
//   PI: 3.4,
// }
// Object.freeze(o);
// o.PI = 33;
// console.log(o);

          // var magic = () => new Date();
            // console.log(magic());

// var x = (ar1, ar2) => ar1.concat(ar2);
//
// console.log(x([1], [2]));
//
// var y = [1, 2, 3, 4,];
// x = y.shift;
// console.log(x());

// var x ="5";
// var y = x.parseInt;
// console.log(typeof x);

// var x =  ["auto", "motorka"];
// x.unshift("čau");
// console.log(x);

// const words = ["magor", "tlustoch", "debílek", "fajnovka", "učuránek"]
// const selected = words.filter(word => word.length > 5);
// console.log(selected);

//   var array1 = [1, 4, 9, 16];
//  var x = [];
//   for (var i = 0; i < array1.length; i++){
//    x.push(array1[i] * 2);
//   }
// console.log(x);

// var array = [1, 5, 3];
// var ops = array.map(x => x * 2);
// console.log(ops);

// var arrays = [1, 2, 3, 4];
// var opss = arrays.filter( x => x > 1).map( x => x * x);
// console.log(opss);
// console.log(arrays);


// const increment = (function() {
//   return function increment(number, value = 1) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2));

// function add(num = 1, numb2 = 1) {
//   return num + numb2;
// }
// console.log(add());

// var x = [5, 10, 15, 20];
// var y = (accu, nacu) => accu + nacu;
// console.log(x.reduce(y))

// function x (ask){
//   return ask > 0 ? "větší" : ask < 0 ? "menší" : "nula";
// }
// console.log(x(0));

// function sum(x, y, z) {
//   return x + y + z;
// }
//
// const numbers = [1, 2, 3];
//
// console.log(sum(...numbers));

// const array = ["jan", "bak", "pak", "tak"];
// const array2 = [...array];
// array[0] = "čus";
//
// console.log(array2);

// var x = "5";
// x = parseInt(x);
// console.log(typeof x);



// function sum(a, b, c){
//   return a + b + c;
// }
//
// var x = [1, 2, 3]
//
// console.log(sum(...x))

// var x = ["x", "xxx", "xxxx"];
// x = x.filter(x => x.length > 2).map( x => x + "y");
// console.log(x);

// var sum = (x,y) => x + y ;
// console.log(sum(1, 2));

// var x = [1, 5, 10];
// var y = x.reduce((accumulator, currentValue) => {return accumulator + currentValue});
//
// console.log(y)
