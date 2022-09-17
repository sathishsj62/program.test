
// Get time differences in hours between two dates//

const date1 = "12 sep, 2022  ";
const date2 = "13 sep, 2022 ";
const date1Obj = new Date(date1);
const date2Obj = new Date(date2);
let y=date1Obj.getHours();
let z=date2Obj.getHours();
let c=z-y
console.log(c)

function hours(date1, date2) {
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