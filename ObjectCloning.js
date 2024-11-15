// Iteration

let src={
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src){
    dest[key]= src[key];
}

console.log(dest);

src.a++;
console.log(dest);

// Assign

let srt ={
    m:10,
    n:20,
    o:30
};

let des = Object.assign({}, srt);
console.log(des);


// Spread

let srm ={
    v:10,
    q:20,
    r:30
};

let desm = {...srm};
console.log(desm);