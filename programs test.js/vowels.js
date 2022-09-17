

// Given two strings, write a program that finds which string has more vowels //

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