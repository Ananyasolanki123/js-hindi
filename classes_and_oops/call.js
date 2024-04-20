function setusername(username){
    this.username=username
}
function createUser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("sds","dded","344433")
console.log(chai);