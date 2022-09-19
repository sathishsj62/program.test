//special characters//

let s ="sathish@12345 $%^&*!@"
let a = s.replace(/[^A-Za-z0-9]/g,"");
console.log(a);
document.getElementById("characters").innerHTML=a;