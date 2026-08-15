//what will be the output of this code.

let greet = "hello"; //global scope

function changeGreet() {
    let greet ="namaste"; //function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scope
    }
}

console.log(greet);
changeGreet();


//output

// i> hello
// ii> namaste
// iii> third one will not execute as there is no call for this function