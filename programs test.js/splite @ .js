
///split @ in mail id //

let a='sathishviviis6620@gmail.com';
let b='';
for(i=0;i<a.length;i++){
    if(a[i]=='@'){
        continue;
    }
    b+=a[i];
console.log(b);

// using the inbuild method//

let  email="sathishvivis6620@gmail.com"
let str = email.indexOf("@")
console.log("str",str);
let k = email.slice(0,str);
let name = k.match(/[a-z]/g);
let num  = k.match(/[0-9]/g);
console.log(name);
console.log(num);

