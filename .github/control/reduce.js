const array1 = [1,2,3,4];
const initialvalue=0;
const sumwithInitial=array1.reduce(
    (accumulator,currentvalue)=>accumulator + currentvalue,initialvalue);
console.log(sumwithInitial);
const array = [1,2,3,4];
const sum=array1.reduce( function
    (accumulator,currentvalue){
        console.log(`acc:${accumulator}and curr:${currentvalue}`);
        return accumulator + currentvalue},0)
console.log(sum);
const shoppingcart=[
    {itemname: "dress",
      price:999},
      {
        itemname:"wine",
        price:322
      },
      {
        itemname:"perfume",
        price:444
      },
      {
        itemname:"hairstyler",
        price:55
      }

]
const cart=shoppingcart.reduce((acc,item)=>acc+item.price,999);
console.log(cart);

