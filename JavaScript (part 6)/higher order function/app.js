//it takes one or miltiple function as an argument

function multipleGreet(func,count) { //higher order function
    for(let i=0; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet,2);