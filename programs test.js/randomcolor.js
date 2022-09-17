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



//random color user click//

let v=document.getElementById('randomcolor')
function randomcolor() {

     var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 150);
     var z = Math. floor(Math.random() * 256 );
  var randomcolor = "rgb(" + x + "," + y + ","+z+")";
  document.getElementById('vivi').style.backgroundColor=randomcolor;

console.log(randomcolor);


 }
 v.addEventListener('click',randomcolor);

 //user input  enter the color name //

 let m=document.getElementById('btn');
 
function btnclick(){
 let color=document.getElementById('inputcolor').value;
 document.getElementById('inputcolor').style.background=color;
 
 console.log(color);
}
m.addEventListener('click',btnclick)


