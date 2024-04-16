//immediately invoked function Expressions
(function chai(){
    //named IIFE
    console.log("DB connected");
})();
//(func_ def.)(func_call)
( (name)=>{
    console.log(`DB connected two ${name}` );
})("ananya");