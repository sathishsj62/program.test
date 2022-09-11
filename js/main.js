// random color//

function randomcolor() {
    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 150);
    var z = Math. floor(Math.random() * 256 );
    var randomcolor = "rgb(" + x + "," + y + ","+z+")";

    console.log(randomcolor);


}

randomcolor();

// random num //

function randomnum() {
    let a = Math.floor(Math.random() * 60)
    let b = Math.floor(Math.random() * 100)
    let c = Math.floor(Math.random() * 150)
    let randomnum = "num(" + a + "," + b + "," + c + ")";
    console.log(randomnum);
}
randomnum();



/// Given two strings, write a program that finds which string has more vowels //

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
let f = prompt("enter the first string");
let s = prompt("enter the second string");
let v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
m = x(f, v);
h = x(s, v);
if (m == h) {
    console.log("the both string has same vowels");
} else if (m > h) {
    console.log("the first string has more vowels");
} else {
    console.log("the second string has more vowels");
}

// how many vowels in name to printe the num//

let x = "sathishkumar";
let y = ['a', 'e', 'i', 'o', 'u']
let sum = 0
for (i = 0; i < x.length; i++) {
    if (y.includes(x[i])) {
        sum += 1;
    }
}
console.log(sum);

//  Print numbers in words in reverse order last  num///

function v(num,j){
    var str = Math.floor(num%10);
    for(let i = 0; i < j.length; i++){
        if(str == i){
            console.log(j[i]);
        }
    }
    }
    var n = 453677;
    let j=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
       v(n,j);

//  Print numbers in words in reverse order//

let n=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
   let x='845';
   let str=""; 
   for(i=x.length-1;i>=0;i--){
      str+=x[i]
   }
   let c = "";
   for(j=0;j<str.length;j++){
       for(k=0;k<n.length;k++){
           if(str[j]==k){
			   c+=n[k];
           }
       }
       
   }  
   console.log(c)

///Given an array with numbers, write a program that prints nearest larger value of each index position//

let n = prompt("enter the number");
  let a = [1,2,3,4,5,6,7,8,9,10,30];
  for(i=0 ;i<a.length; i++){
	  if(n<a[i]){
		  console.log(a[i]);
		  break;
	  }
  }



  let x='kumaresanmpi@gmail.com';
  let y=''
  for(i=0;i<x.length;i++){
      if(x[i]=='@'){
          continue;
      }
      y+=x[i]
  }
  console.log(y)
  

