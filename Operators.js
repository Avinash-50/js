// 1- Arithmetic Operators

let a = 23;
let b = 5;
console.log(a**b);

let c = 24;
let d = 2;
console.log(c%d);

// 2-- Comparison Operators

let s = 1;
let t = '1';

console.log(s===t);

let v = 1;
let m = '1';

console.log(v==m);

// 3 -- Assigment Operator

let x = 10;
x += 5;

console.log(x);

//  Ternary Operator

let vote= (age>18) ? "TOO YOUNG" : "OLD ENOUG";
console.log(vote);

// 4--Logical Operator

let isSunny = true;
let isWarm = true;
if (isSunny && isWarm) {
    console.log("It's a nice day!");
}

let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("You can relax today!");
}

//5-- Bitwise Operator

let ab = 5; // 0101 in binary
let bc = 1; // 0001 in binary
let result = ab & bc; // 0001 in binary, which is 1
console.log(result); // Output: 1



let ad = 5; // 0101 in binary
let bd = 1; // 0001 in binary
let res = ad | bd; // 0101 in binary, which is 5
console.log(res); // Output: 5

