
// normal method//

let x = new Date();
 let y  = prompt("enter the year")
 let z = x.getFullYear();
 let m = z-y ;
 console.log(m);

 /// Write a program to calculate age using JS date///

function age(birthYear){
let today = new Date();
let bronDate = new Date(birthYear);
let myAge =today.getFullYear() - bronDate.getFullYear();
console.log(myAge);
}
age('1998-06-02');



function calculateage(age) { 
    var x = Date.now() -age.getTime();
    console.log(x);
    var y = new Date(x); 
    console.log(y);

    return Math.abs(y.getFullYear() -1970);
}
console.log(calculateage(new Date(1998, 06, 02))); 