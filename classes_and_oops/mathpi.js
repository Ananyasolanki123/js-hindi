const discriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(discriptor);
const chai ={
    name:"sss",
    price:56,
    is:true,
    orderchai:function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false
    //if we change enumerable to true than in iteration is done on name also
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (const [key,value] of Object.entries(chai)) {
    if(typeof value!=="function"){
        console.log(`${key}:${value}`);

    }
    
    
}

