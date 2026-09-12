const student = {
    name: "aman",
    marks: 95,
    prop: this, // global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parent scope
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student object call / lexical scope
        },2000);
    },
    getInfo2: function () {
        setTimeout(function() {
            console.log(this); // function call object / window object call
        },2000);
    },
};

const a = 5; // global scope