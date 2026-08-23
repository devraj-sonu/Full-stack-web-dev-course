// Write a JavaScript function to extract unique characters from a string.Example : str = “abcdabcdefgggh” ans=“abcdefgh”

let str = "abcdabcdefgggh";

function removeDuplicate(str) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            //if current character is not added then add it into my ans.
            //otherwise it is a duplicate
            ans += currChar;
        }
    }
    return ans;
}

removeDuplicate(str);