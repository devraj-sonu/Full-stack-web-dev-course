// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Example:country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"

let country = ["Australia","germany","UnitedStatesofAmerica"];

function longestName(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen>ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

longestName(country);