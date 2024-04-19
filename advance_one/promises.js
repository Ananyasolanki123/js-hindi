const promiseone =new Promise(function(resolve , reject){
    //do async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log("async task is complete");

    },1000)

})
promiseone.then(function(){
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task2 is complete");
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})