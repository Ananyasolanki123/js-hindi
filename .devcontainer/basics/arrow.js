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
console.log(this)