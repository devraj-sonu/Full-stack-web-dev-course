//a variable defined outside a function can be accessible inside another function defined after the variable declaration

function outerFunc() {
    let x = 5;
    let y = 6;

    function innerFunc() {
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

//hoisting