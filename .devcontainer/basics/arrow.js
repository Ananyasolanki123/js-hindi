const user={
    username:"sdsandjs",
    price:44,
    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`);
        //console.log(this)
    }
}
//user.welcomemessage()
//user.username="aaaaa"
//user.welcomemessage()
//console.log(this)
/*function chai(){
   let username="chh"
    console.log(this.username)
}
//containerchai()*/
/*const chai=function (){
    let username="chh"
     console.log(this.username)
 }
 chai()*/
 const chai=()=>{
    let username="chh"
     console.log(this.username)
 }
 chai()
 /*const add=(num1,num2)=>{
    return num1 + num2;
 }
 console.log(add(3,4))*/
 const add=(num1,num2)=> (num1 + num2)
 
 console.log(add(3,4))
 const two=(num1,num2)=> ({username:"ananya"})
 
 console.log(two(3,4))
