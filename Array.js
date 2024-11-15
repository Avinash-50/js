// Create Arrays 

let a = [1,3,4,6,8,9,'a','b','d',5,8];

// <-----Insertion----> 

//END
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');

// Begin..

const numbers = [1,3,2,4];

const add = numbers.unshift(8);
console.log(add);

// Midddle

const lastNum= [2,4,5,6,8];
const answer = lastNum.splice(2,0,44,56,76);
console.log(answer); 

// we want to check if a number exist in a array.
let num = [1,2,3,4];

console.log(num.includes(7));

// <------Searching.....>

let courses =[
    {no:1, naam: 'love'},
    {no:2, naam:'rahul'}
]

console.log(courses);


courses.find(function(course){
    return course.naam==='love';
});

//  <-------Removing Element....>

///-----End---
let m = [1,2,3,4,5,6,6,7,,8];
let n= m.pop();
console.log(n);
/// --------Beginning....

m.shift();
console.log(m);

//------ Middle--

m.splice(2,2);

console.log(m);

// ------<Emptying an Array......>

let num1 = [1,2,3,4,5,6,7];
let num2 = num1;

    num1.length=0;
 console.log(num1);
 console.log(num2);
