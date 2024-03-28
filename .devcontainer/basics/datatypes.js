"use strict";//treat all js code as newer version
//alert(3+3)//we are using nodejs not browser
let score = "true";
console.log(typeof score);
let value=Boolean(score);
console.log(value);
console.log(typeof value);
let marks = "33abc";
console.log(typeof marks);
let val=Number(marks);
console.log(val);
console.log(typeof val);
console.log(val);
let ms = null;
console.log(typeof ms);
let v=Number(ms);
console.log(v);
console.log(typeof v);
console.log(v);
//"33"->33
//"33abc"->nan
//true->1,false->0
let Loggedin=""
console.log(typeof Loggedin)
let N=Boolean(Loggedin);
console.log(typeof N);
console.log(N);
//" "->false  " ananya"->true
//*******************operations************
let num =3;
let negvalue=-num;
console.log(negvalue);
let num1 =0;
let posvalue=+num1;
console.log(posvalue);
console.log(typeof posvalue);
console.log("1"+2+2);
console.log(2+2+"1");
console.log(2+2*5%3/1-6+3);
console.log(+true);
