
///Write a program to Check whether a date is a weekend date or not///

var date=new Date("2022-09-11");
var Day = date.getDay();
console.log(Day);
var Weekend = (Day === 6) || (Day === 0);
 Weekend?console.log('weekend'):console.log('not weekend')



var date=new Date("2022-09-12");
var Day = date.getDay();
var Weekend = (Day === 6) || (Day === 0);
if(Weekend){
   console.log("a Weekend");
} else {
   console.log(" a not a Weekend");
}