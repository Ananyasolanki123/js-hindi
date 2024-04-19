const promiseone =new Promise(function(resolve , reject){
    //do async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log("async task is complete");
        resolve()

    },1000)

})
promiseone.then(function(){
    console.log("promise consumed");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task2 is complete");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ananya",email:"a931@gmail.com",age:20});
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"ananya",passwors:"missy"})
        }else{
            reject('error:something wrong')
        }

    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("promise is finally resloved or reject")
})
const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"ananya",passwors:"george"})
        }else{
            reject('error:js ent wrong')
        }

    },1000)
})
async function consumepromisefive(){
    try{
        const response=await promisefive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumepromisefive()
async function getusers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    console.log(data);
    }
    catch(error){
        console.log("E:",error);
    }
}
getusers()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))