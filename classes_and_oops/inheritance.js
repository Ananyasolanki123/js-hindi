class user{
    constructor(username){
        this.username=username

    }
    getname(){
        console.log(`name is ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }
    addcourse(){
        console.log(`new course was added by ${this.username}`);
    }
}
const tea=new user("ananya")
const chai = new teacher("ananya","123@","abbc")
console.log(chai.addcourse());
console.log(chai.getname());
console.log(tea===chai);
console.log(tea instanceof user);