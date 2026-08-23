const student = {
    name: "Devraj",
    math: 89,
    eng: 90,
    phy: 95,
    che: 80,

    getAvg() {
        console.log(this);
        let avg = (this.eng + this.phy + this.che + this.math) /4;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}