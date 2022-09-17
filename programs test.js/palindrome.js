// palindrome //

let x='hello';
 let y=''
for(i=x.length-1;i>=0;i--){
   y+=x[i]
 }
 if(x==y){
    console.log('it is palindrome')
 }
 else{
     console.log('it is not palindrome')
} 

//using induild method//

 let a='akka';
let b=x.split('').reverse().join('');
a==b?console.log('palindrome'):console.log('not palindrom')