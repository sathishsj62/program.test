

// Given an array with numbers, write a program that prints nearest larger value of each index position


let x = [10, 15, 20, 30, 13, 11]
let y = x.sort(function (a, b) {
   return a - b
})

   for (i = 0; i < y.length; i++) {
   let next = -1;
   for (j = 0; j < y.length; j++) {
      if (y[i] < y[j]) {
         next = y[j];
         break;
      }

   }
   console.log(next)
}