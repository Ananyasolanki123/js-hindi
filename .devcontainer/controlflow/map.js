const coding=["java","js","ruby","python","cp"]
//foreach doesnt return values
const values= coding.forEach((item)=>{
    console.log(item);
})
console.log(values);
const mynums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=mynums.filter((num)=> {
//    return num>5  
//})
//console.log(newNums);
const newnums=[]
mynums.forEach((nums)=>{
    if(nums>4){
        newnums.push(nums)
    }
})
console.log(newnums);
const mynumbers =[1,2,3,4,5,6,7,8,9,0]
const my=mynumbers.map((nums)=>{
    return nums+10
})
console.log(my);
const newn=[]
mynumbers.forEach((nums)=>{
    let n=nums+10;
    newn.push(n);
})
console.log(newn);
const nuu=mynumbers.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=>nums>=20)
console.log(nuu);
