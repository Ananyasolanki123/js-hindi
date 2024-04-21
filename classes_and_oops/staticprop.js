class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username:${this.username}`);
    }
    static createid(){
        return `123`
    }
}
const chai =new user("anna")
//console.log(chai.createid());
class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email

    }
}
const iphone = new teacher("anaa","123@")
iphone.logme();
console.log(iphone.createid());