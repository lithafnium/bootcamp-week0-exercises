const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(" "); 
};

// TODO - write a function which reverses the string
const reverse = str => {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse(); 
    return reverseArray.join(""); 
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    let unique = [...new Set(arr)];
    return unique; 
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    let product = 1; 
    for(let i = num ; i > 0; i--){
        product *= i; 
    }
    return product; 
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if(arr1.length != arr2.length){
        return -1; 
    }
    const ret = []; 
    for(let i = 0; i < arr1.length; i++){
        const addarr = []; 
        addarr.push(arr1[i]); 
        addarr.push(arr2[i]); 

        ret.push(addarr); 
    }
    return ret; 
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    let arr1 = []; 
    let arr2 = []; 

    for(let i = 0; i < arr.length; i++){
        let two = arr[i]; 
        arr1.push(two[0]); 
        arr2.push(two[1]); 
    }

    let ret = [arr1, arr2]; 
    return ret; 
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    let ret = str.split(""); 
    for(let i = 0; i < num; i++){
        let endChar = ret[ret.length - 1]; 
        for(let j = ret.length - 1; j >= 1; j--){
            ret[j] = ret[j-1]; 
        }
        ret[0] = endChar; 
    }
    return ret.join(""); 
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    let d = new Date(); 

    let ending = ""; 
    if(d.getHours() < 12){
        ending = "morning"; 
    } else if(d.getHours() >= 12 && d.getHours() < 17){
        ending = "morning"; 
    }else {
        ending = "evening"; 
    }

     
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    return "Today's date is " + months[d.getMonth()] + " " + d.getDate() + (d.getDate() > 3 ? "th" : "rd") + ". It is " + d.getHours() + ":" + d.getMinutes() + " "
     + (d.getHours() >= 12 ? "PM": "AM") + "in the " + ending; 

};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

console.log(tokenize("hi hello testing testing testing")); 
console.log(reverse("hi my name is steve")); 
console.log(uniqueOnes([6, 2, 1, 1, 2, 3, 4, 5, 5, 5]));
console.log(factorial(5)); 
console.log(zip([1, 2, 3, 5, 6, 7], [4, 5, 6, 8, 9, 10])); 
console.log(unzip([[1, 2], [2,3], [4, 5], [6, 7]]))
console.log(shiftRight("hello", 3)); 
console.log(announceDate()); 

