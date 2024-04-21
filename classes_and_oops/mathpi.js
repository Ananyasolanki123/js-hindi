const discriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(discriptor);
const chai ={
    name:"sss",
    price:56,
    is:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

