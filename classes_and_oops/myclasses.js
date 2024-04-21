//es6
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
}
const chai= new user("ananya","a@gmail.com","1234")
console.log(chai.encryptPassword());