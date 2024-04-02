//singleton
//object.create
//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"hitesh",
    "full name":"ananya solanki",
    [mySym]:"mykey1",
    age: 18
}
console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser.mySym)





