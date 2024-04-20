let myname="annaya"
console.log(myname.trueLength);
let heros=['thor','spiderman']
let herospower={
    thor:"hammer",
    spider:"sling",
    getspiderPower:function(){
         console.log(`spider power is ${this.spider}`);
    }
}
Object.prototype.ananya=function(){
    console.log("ananya is present");
}
Array.prototype.ana=function(){
    console.log("ana")
}
heros.ana()
heros.ananya()
herospower.ananya()
//herospower.ana()
//inheritance
const user={
    name:"fgfgh",
    fdgfd:"dfgdghfh"
}
const teacher={
    makevideo:true
}
const tsupport={
    isavailable:false
}
const tas={
    makeass:"js asg",
    fulltime:true,
    __proto__:tsupport
}
teacher.__proto__=user
//modern syntax
Object.setPrototypeOf(tsupport,teacher)
let username="ana     "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.string}`);
    console.log(`true length is ${this.trim().length}`);
}
username.trueLength()
"ananya".trueLength()
"hiddenlove".trueLength()
