
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
   console.log(c);


   //  Print numbers in words in reverse order last  num///

function v(num,j){
    var str = Math.floor(num%10);
    for(let i = 0; i < j.length; i++){
        if(str == i){
            console.log(j[i]);
        }
    }
    }
    var l = 453677;
    let j=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
       v(l,j);
