// Write a JavaScript function that returns array elements larger than a number.

let arr = [6,9,3,2,1,4,7,5,8,0];
let num = 5;

function getNum(arr,num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getNum(arr,num);