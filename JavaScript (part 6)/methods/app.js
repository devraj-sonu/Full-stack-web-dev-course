//action that can be performed on an object

const calculator = {
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
};

//just we can define it another way

const computer = {
    study(c,d) {
        return c+d;
    },
    game(c,d) {
        return c-d;
    },
    carry(c,d) {
        return c*d;
    }
};