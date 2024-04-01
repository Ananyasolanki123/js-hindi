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








