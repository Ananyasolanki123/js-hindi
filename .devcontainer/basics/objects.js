//singleton
//object.create
//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"hitesh",
    "full name":"ananya solanki",
    [mySym]:"mykey1",//jb symbol h yae refer krna ho toh square bracket use krte h vrna bina symbol k
    age: 18,
    email:"ananya@1804"
}
jsUser.email="a93191366@gmail.com";
//Object.freeze(jsUser)
jsUser.email="anitasingh@123";
jsUser.age=20;
console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser.mySym)
console.log(jsUser)
jsUser.greeting = function(){
    console.log("hello");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
jsUser.greeting2=function(){
    console.log(`heelo js user,${this.name}`);
}
console.log(jsUser.greeting2());
console.log(jsUser.greeting2);
const tinderuser= new Object();//singleton obj
//const tinderuser ={} non singleton obj
tinderuser.id= "123abc"
tinderuser.name="arpit"
tinderuser.isloggedin = false
console.log(tinderuser);
const regularuser={
    email :"adjdjsndjsndk",
    username:{
        fullanme:{
            firstname:"anasnka",
            lastname:"sdnsjdnjsn"
        }

    }
}
console.log(regularuser.username);
console.log(regularuser.username.fullanme);
console.log(regularuser.username.fullanme.firstname);
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3= {obj1,obj2}
console.log(obj3)
const obj4 =Object.assign({},obj1,obj2,obj3)
console.log(obj4)
const obj5 ={...obj1,...obj2,...obj3}
console.log(obj5)
const users=[
    {
        rollno:2,
        email:"anshhshash"

    },
    {
        rollno:3,
        email:"anshita"
    },
    {
        rollno:4,
        email:"anitasss"
    }
]
users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("name"));
console.log(users)
const u4={...users}
console.log(u4)























