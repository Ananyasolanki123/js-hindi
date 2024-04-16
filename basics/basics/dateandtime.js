let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.getTimezoneOffset());
console.log(typeof mydate);
let mycreateddate = new Date(2024,3,24,5,4)
console.log(mycreateddate.toLocaleDateString());
console.log(mycreateddate.toLocaleTimeString());
let mycreatedate = new Date("01-01-2024")
console.log(mycreatedate.toLocaleDateString());
let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));
let dat= new Date()
console.log(dat.getFullYear()-1);
dat.toLocaleString('default',{
    weekday:"long"
})




