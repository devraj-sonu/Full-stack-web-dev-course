// scope determines the accessibility of variables, objects, and functions from different parts of the code
let sum = 54;   // Global Scope

function calSum(a,b) {
    let sum = a + b; // function scope
    console.log(sum);
}

calSum(3,5);

console.log(sum);