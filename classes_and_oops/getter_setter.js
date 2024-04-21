class ana{
    constructor(username,email){
        this.username=username
        this.email=email
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username=value.toUpperCase()
    }
    get email(){
        return `${this._email}anana`
    }
    set email(value){
        this._email=value
    }
}
const user=new ana("nnns","sjj@efkejfk")
console.log(user.email);
console.log(user.username);