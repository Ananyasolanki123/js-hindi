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
})