const object = {
    message: 'Hello World',

    logMessage() {
        console.log(this.message);
    }
};


setTimeout(object.logMessage,1000);

//output

//After a delay of 1 second ,undefined is logged to the console.