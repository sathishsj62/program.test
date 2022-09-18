
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


// ///Get the week first day//

//  function getMonday(d) {
//    d = new Date(d);
//    var day = d.getDay(),
//        diff = d.getDate() - day + (day == 0 ? -6:1);
//    return new Date(d.setDate(diff));
//  }
 
//  getMonday(new Date()); 

// // switch case method//

// let a=new Date('2022,09,27');
// let b=a.getDay();
// let month1=a.getMonth();
// let year=a.getFullYear();
// let day;
// let month;
// if(b==1){
// switch(b){
//     case 0:
//         day='sunday';
//         break;
//          case 1:
//         day='monday';
//         break;
//          case 2:
//         day='tuesay';
//         break;
//          case 3:
//         day='wednesday';
//         break;

//         day='thursday';
//         break;
//          case 5:
//         day='friday';
//         break;
//          case 6:
//         day='saturday';
//         break;
// }
// switch(month1){
//     case 0:
//         month='january';
//         break;
//          case 1:
//         month='february';
//         break;
//          case 2:
//         month='march';
//         break;
//          case 3:
//         month='april';
//         break;
//          case 4:
//        month= 'may';
//         break;
//         ( case 5:
//         month='june';
//         break;
//          case 6:
//         month='july';
//         break;
//          case 7:
//       month='august';
//         break;
//          case 8:
//         month='september';
//         break;
//          case 9:
//         month='october';
//         break;
//          case 10:
//         month='november';
//         break;
//          case 11:
//        month='december';
//         break;
// }
// // console.log(`${day},${month},${year}`)
// console.log (day+","+month+","+year);
// }
// else{
//     console.log('not week first')
// }


// function x (a,b){
//    let c =0;
//    for(i=0; i<a.length;i++){
//       for(j=0;i<b.length;j++){
//          if(a[i]==b[j]);
//          c++
//       }
//    }
//    return c;
// }
// let m,h;
// let f =prompt("enter the first string");
// let s = prompt("rnter the secon string");
// let v = ["a","e","i","o","u"];
// m = x(f,v);
// h = x (s,v);
// if(m==h){
//    console.log("both are same vowels");
// }else if(m>h){
//    console.log("first string more then vowels");
// }else{
//    console.log("second string more then vowels");
// }

// document//

// function x(a, b) {
//    let c = 0;
//    for (i = 0; i < a.length; i++) {
//        for (j = 0; j < b.length; j++) {
//            if (a[i] == b[j])
//                c++
//        }
//    }
//    return c;
// }


// let m, h;
// let f = prompt("enter the first string");
// let s = prompt("enter the second string");
// let v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// m = x(f, v);
// h = x(s, v);
// if (m == h) {
//    // console.log("the both string has same vowels");
//    document.getElementById('heading').innerHTML='the both string are same vowels';
// } else if (m > h) {
//    console.log("the first string has more vowels");
//    document.getElementById('heading').innerHTML='the first string has more vowels';
// } else {
//    console.log("the second string has more vowels");
//    document.getElementById('heading').innerHTML='the second string has more vowels';
// }




let p = document.getElementById("btn")
p.addEventListener('click',x)
let n = document.getElementById("string1").value ;
let o = document.getElementById("string2").value ;
 console.log(o,n)
function x(a, b) {
    let c = 0;
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] == b[j])
                c++
        }
    }
    return c;
   
}


let m, h;
// let f = prompt("enter the first string");
// let s = prompt("enter the second string");
let v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
m = x(n, v);
h = x(o, v);
if (m == h) {
   //  console.log("the both string has same vowels");
    document.getElementById('heading').innerHTML='the both string are same vowels';
} else if (m > h) {
   //  console.log("the first string has more vowels");
    document.getElementById('heading').innerHTML='the first string has more vowels';
} else {
   //  console.log("the second string has more vowels");
    document.getElementById('heading').innerHTML='the second string has more vowels';
}






