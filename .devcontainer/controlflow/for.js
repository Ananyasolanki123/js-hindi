const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
    
}
const ar=[{username:"ananya",id:33},{username:"saa",id:44}]
for (const i in ar) {
    if (Object.hasOwnProperty.call(ar, i)) {
        const element = ar[i];
        console.log(ar[i]);
        
    }
}
//map
const map=new Map()
map.set('IN',"india")
map.set('usa',"united states of am")
map.set('fi',"frnce")
console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobject) {
        console.log(`${key} short is for ${myobject[key]}`);
}
const  programming =["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}
//mp not iterable
const mp=new Map()
mp.set('IN',"india")
mp.set('usa',"united states of am")
mp.set('fi',"frnce")
for (const i in mp) {
    console.log(i);
}
//foreach loop
const coding=["java","js","ruby","python","cp"]
//coding.forEach(function (val){
//    console.log(val);
//})
/*coding.forEach((val)=>{
    console.log(val);
})
function printme(item){
    console.log(item);
}
//coding.forEach(printme)*/
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const mycoding=[{
    lang:"js",
    langf:"javascript"
},{
    lang:"cpp",
    langf:"c++"
},
{
    lang:"ds",
    langf:"datascience"
},]
mycoding.forEach((item)=>{
    console.log(item.langf);
})