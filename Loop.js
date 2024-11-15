// For Loop

for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}

// While Loop
let i = 0; // Initialize the counter variable

while (i < 5) { // Condition: loop runs as long as i is less than 5
    console.log(`The value of i is ${i}`); // Print the current value of i
    i++; // Increment the counter variable
}

// Do-While Loop

let count = 0;

do {
    console.log(count);
    count++;
} while (count < 5);

// For-In Loop
let rectangle ={
    len:2,
    bre:4

}

for(let key in rectangle){
    console.log(key);
}