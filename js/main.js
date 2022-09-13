// random color//

// function randomcolor() {
//     var x = Math.floor(Math.random() * 100);
//     var y = Math.floor(Math.random() * 150);
//     var z = Math. floor(Math.random() * 256 );
//     var randomcolor = "rgb(" + x + "," + y + ","+z+")";

//     console.log(randomcolor);


// }

// randomcolor();

// random num //

// function randomnum() {
//     let a = Math.floor(Math.random() * 60)
//     let b = Math.floor(Math.random() * 100)
//     let c = Math.floor(Math.random() * 150)
//     let randomnum = "num(" + a + "," + b + "," + c + ")";
//     console.log(randomnum);
// }
// randomnum();



/// Given two strings, write a program that finds which string has more vowels //

// function x(a, b) {
//     let c = 0;
//     for (i = 0; i < a.length; i++) {
//         for (j = 0; j < b.length; j++) {
//             if (a[i] == b[j])
//                 c++
//         }
//     }
//     return c;
// }

// let m, h;
// let f = prompt("enter the first string");
// let s = prompt("enter the second string");
// let v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// m = x(f, v);
// h = x(s, v);
// if (m == h) {
//     console.log("the both string has same vowels");
// } else if (m > h) {
//     console.log("the first string has more vowels");
// } else {
//     console.log("the second string has more vowels");
// }

// how many vowels in name to printe the num//

// let x = "sathishkumar";
// let y = ['a', 'e', 'i', 'o', 'u']
// let sum = 0
// for (i = 0; i < x.length; i++) {
//     if (y.includes(x[i])) {
//         sum += 1;
//     }
// }
// console.log(sum);

//  Print numbers in words in reverse order last  num///

// function v(num,j){
//     var str = Math.floor(num%10);
//     for(let i = 0; i < j.length; i++){
//         if(str == i){
//             console.log(j[i]);
//         }
//     }
//     }
//     var n = 453677;
//     let j=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
//        v(n,j);

//  Print numbers in words in reverse order//

// let n=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
//    let x='845';
//    let str=""; 
//    for(i=x.length-1;i>=0;i--){
//       str+=x[i]
//    }
//    let c = "";
//    for(j=0;j<str.length;j++){
//        for(k=0;k<n.length;k++){
//            if(str[j]==k){
// 			   c+=n[k];
//            }
//        }

//    }  
//    console.log(c)

// ///Given an array with numbers, write a program that prints nearest larger value of each index position//

// let n = prompt("enter the number");
//   let a = [1,2,3,4,5,6,7,8,9,10,30];
//   for(i=0 ;i<a.length; i++){
// 	  if(n<a[i]){
// 		  console.log(a[i]);
// 		  break;
// 	  }
//   }

// function small_large(grt){
//    let t =-1;
//    grt=grt.sort(function(a,b){returna-b})
//    if(grt==""){
//       console.log(t);
//    }else{
//       console.log(grt[0]);
//    }
// }
// let a= [10,8,11,20,15]
// let great=[];
// for(i=0;i<a.length;i++){
//    for(j=0;j<a.length;j++){
//       if(a[i]<a[j]){
//          great.push(a[j]);
//       }
//    }
//    small_large(great);
//    great=[];
// }

// split @ in mail id //

//   let x='sathishviviis6620@gmail.com';
//   let y=''
//   for(i=0;i<x.length;i++){
//       if(x[i]=='@'){
//           continue;
//       }
//       y+=x[i]
//   }
//   console.log(y)

// using the inbuild method//

//   let  email="sathishvivis6620@gmail.com"
//   let str = email.indexOf("@")
//   console.log("str",str)
//   let k = email.slice(0,str);
//   let name = k.match(/[a-z]/g);
//   let num  = k.match(/[0-9]/g);
//   console.log(name);
//   console.log(num)

/*  let x='sathishvivis6620@gmail.com';
 let y=''
  for(i=0;i<x.length;i++){
   if(x[i]=='@'){
       continue;
   }
   y+=x[i]
}
 console.log(y)
*/

/// Write a program to calculate age using JS date///

//   function calculateage(age) { 
//     var x = Date.now() -age.getTime();
//     console.log(x);
//     var y = new Date(x); 
//     console.log(y);

//     return Math.abs(y.getFullYear() -1970);
// }
// console.log(calculateage(new Date(1998, 06, 02))); 


// let x = new Date();
//  let y  = prompt("enter the year")
//  let z = x.getFullYear();
//  let m = z-y ;
//  console.log(m);


///Write a program to Check whether a date is a weekend date or not///

// var date=new Date("2022-09-11");
// var Day = date.getDay();
// console.log(Day);
// var Weekend = (Day === 6) || (Day === 0);
//  Weekend?console.log('weekend'):console.log('not weekend')

// //

// var date=new Date("2022-09-12");
// var Day = date.getDay();
// var Weekend = (Day === 6) || (Day === 0);
// if(Weekend){
//    console.log("a Weekend");
// } else {
//    console.log(" a not a Weekend");
// }


// function age(birthYear){
// let today = new Date();
// let bronDate = new Date(birthYear);
// let myAge =today.getFullYear() - bronDate.getFullYear();
// console.log(myAge);
// }
// age('1998-06-02');


// ///Given an array with numbers, write a program that prints nearest larger value of each index position


// let x = [10, 15, 20, 30, 13, 11]
// let y = x.sort(function (a, b) {
//    return a - b
// })

//    for (i = 0; i < y.length; i++) {
//    let next = -1;
//    for (j = 0; j < y.length; j++) {
//       if (y[i] < y[j]) {
//          next = y[j];
//          break;
//       }

//    }
//    console.log(next)
// }

// Get time differences in hours between two dates//
function hours(date1, date2){
 
  let time =(date2.getTime() - date1.getTime());
  time = (60 * 60);
  return (time);
  
  
 }

date1 = new Date(2022,09,11);
date2 = new Date(2022,09,13);
console.log(hours(date1, date2));


///Get the week start date//

 function getMonday(d) {
   d = new Date(d);
   var day = d.getDay(),
       diff = d.getDate() - day + (day == 0 ? -6:1);
   return new Date(d.setDate(diff));
 }
 
 getMonday(new Date()); 


 const date1 = "12 sep, 2022  ";
const date2 = "13 sep, 2022 ";
const date1Obj = new Date(date1);
const date2Obj = new Date(date2);
let y=date1Obj.getHours();
let z=date2Obj.getHours();
let c=z-y
console.log(c)

function hours(date1, date2) 
 {

  var time =(date1.getTime() - date2.getTime()) / 1000;
  time /= (60 * 60);
  return Math.abs((time));
  
 }

date1 = new Date(2022,09,13);
date2 = new Date(2022,09,11);
console.log(hours(date1, date2));


date1 = new Date("september 13, 2022 16:10:00");
date2 = new Date("september 12, 2022 20:10:00");
console.log(hours(date1, date2));
