const user = {
    username:"ananya",
    logincount: 8,
    signedin:true,
    getuserdet :function(){
       // console.log("ejfnjenfj");
       //console.log(`usename:${this.username}`);
       console.log(this);


    }


}
//console.log(user.username);
//console.log(user.getuserdet());
//console.log(this);
function user1(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    return this

}
const userone= new user1('ananya',6,'true')
const usertwo= new user1('chaiaurcode',6,'true')


console.log(userone);
console.log(usertwo);