//array
const hero=["anjsn","jskjand","bashbajh"];
//obj
let myobj={
    name:"Ani",
    age:6

}
const myfunction=function(){
    console.log("hi");
}
console.log(typeof hero)
/******************************************************** */
//stack(primitive),heap(non -primitive)
let myname ="annaya"
let anothername= myname;
anothername="sadkasjk"
console.log(anothername);
console.log(myname);
console.log("heap");
let userone={
    user:"hdhsukl",
    email:"dkjkdj",
}
let usertwo= userone;
usertwo.user="wkdkdsj"
console.log(userone.user)
console.log(usertwo.user)

