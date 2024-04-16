const myarr =[1,2,3,4,5,6]
myarr.push(9)
console.log(myarr);
myarr.unshift(2)
console.log(myarr);
myarr.shift()
console.log(myarr);
//myarr.filter()
//console.log(myarr);

/*myarr.splice()
console.log(myarr);

myarr.some()
console.log(myarr);

myarr.reduceRight()
console.log(myarr);

myarr.map()
console.log(myarr);

myarr.copyWithin()
console.log(myarr);*/

console.log(myarr.includes(7))
console.log(myarr);
const newArray=myarr.join()
console.log(myarr);
console.log(newArray);
console.log(typeof newArray);
//slice,splice 
console.log("A",myarr);
const myn1 = myarr.slice(1,3);
console.log(myn1);

console.log("B",myarr);
const myn2 = myarr.splice(1,3);
console.log("C",myarr);

console.log(myn2);
//instead of concatination we can use spread function
const marvel_heros=["thor","asbashahs","hulk"];
const dc_heroes=["ananya","asit","arpit"];
const all_new_heroes=[...marvel_heros,...dc_heroes]
console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
console.log(Array.isArray("ananya"))
console.log(Array.from("ananya"))
console.log(Array.from({name:"ananya"}))//interesting case
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));










