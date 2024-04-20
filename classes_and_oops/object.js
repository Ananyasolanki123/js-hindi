function multipleBy5(num){
    return num*5

}
multipleBy5.power=2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
const array=[1.2,3,4,5]
console.log(array);
console.log(array.prototype);
function user(username,score){
    this.username=username
    this.score=score

}
user.prototype.increment=function(){
    this.score++
}
user.prototype.printme=function(){
    console.log(`score is `)
}
const chai =user("ananya",99)
const tea =user("ana",9)

console.log(chai);
console.log(tea);


