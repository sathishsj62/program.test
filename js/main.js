
///Given an array with numbers, write a program that prints nearest larger value of each index position//

let n = prompt("enter the number");
  let a = [1,2,3,4,5,6,7,8,9,10,30];
  for(i=0 ;i<a.length; i++){
	  if(n<a[i]){
		  console.log(a[i]);
		  break;
	  }
  }

function small_large(grt){
   let t =-1;
   grt=grt.sort(function(a,b){returna-b})
   if(grt==""){
      console.log(t);
   }else{
      console.log(grt[0]);
   }
}
let a= [10,8,11,20,15]
let great=[];
for(i=0;i<a.length;i++){
   for(j=0;j<a.length;j++){
      if(a[i]<a[j]){
         great.push(a[j]);
      }
   }
   small_large(great);
   great=[];
}


///Get the week first day//

 function getMonday(d) {
   d = new Date(d);
   var day = d.getDay(),
       diff = d.getDate() - day + (day == 0 ? -6:1);
   return new Date(d.setDate(diff));
 }
 
 getMonday(new Date()); 

// switch case method//

let a=new Date('2022,09,27');
let b=a.getDay();
let month1=a.getMonth();
let year=a.getFullYear();
let day;
let month;
if(b==1){
switch(b){
    case 0:
        day='sunday';
        break;
         case 1:
        day='monday';
        break;
         case 2:
        day='tuesay';
        break;
         case 3:
        day='wednesday';
        break;

        day='thursday';
        break;
         case 5:
        day='friday';
        break;
         case 6:
        day='saturday';
        break;
}
switch(month1){
    case 0:
        month='january';
        break;
         case 1:
        month='february';
        break;
         case 2:
        month='march';
        break;
         case 3:
        month='april';
        break;
         case 4:
       month= 'may';
        break;
         case 5:
        month='june';
        break;
         case 6:
        month='july';
        break;
         case 7:
      month='august';
        break;
         case 8:
        month='september';
        break;
         case 9:
        month='october';
        break;
         case 10:
        month='november';
        break;
         case 11:
       month='december';
        break;
}
// console.log(`${day},${month},${year}`)
console.log (day+","+month+","+year);
}
else{
    console.log('not week first')
}









