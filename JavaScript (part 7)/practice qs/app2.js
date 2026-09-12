// write a function that print "hello world" 5 times at interval of 2 sec each.

let id = setInterval(()=>{
    console.log("Hello World");
},2000);


setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);