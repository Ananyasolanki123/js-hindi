function saymyname(){
    console.log("Ananya");

}
saymyname()
//function addtwonumbers(number1,number2){
//    console.log(number1+number2);
//}
function addtwonumbers(number1,number2){
    //let result = number1+number2;
    return number1+number2;

}
const result=addtwonumbers(3,4)
console.log("result",result);
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(2,400,500))
const user={
    username:"ananya",
    price:"99"
}
function handleanyobject(anyobject){
    console.log(`username is${anyobject.username} and proce is ${anyobject.price}`)
}
//handleanyobject(user)
handleanyobject({
    username:"sd",
    price:33
})
const myarray =[200,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(myarray))
console.log(returnsecondvalue([200,400,600]));

