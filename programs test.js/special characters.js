//special characters//

let s ="sathish@12345 SATHISH  $%^&*!@"
let a = s.replace(/[^A-Za-z0-9]/g,"");
let b = s.replace(/[^a-z]/g,"");
let c = s.replace(/[^A-Z]/g,"");
let d = s.replace(/[^0-9]/g,"");
let e = s.replace(/[A-Za-z0-9]/g,"");

document.write(a,b,c,d,e);
// document.write(b);
// document.write(c);
// document.write(d);