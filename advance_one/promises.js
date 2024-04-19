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