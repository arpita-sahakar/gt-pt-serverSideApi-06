// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {};

const isPalindrome = (str)=> {
    let reverse = str.split("").reverse().join("");
    if(reverse.toLowerCase() === str.toLowerCase()){
        return true
    }else {
        return false
    }
}

let result = isPalindrome("Madam");
console.log(result);


// option - 2
// const isPalindrome = (str)=> {
//     let reverseStr ="";
//     for (i=str.length-1; i>=0; i--){
//         reverseStr = reverseStr + str[i]
//     }
//     console.log (reverseStr);

//     if(reverseStr === str){
//         return true
//     }
//     else {
//         return false
//     }
// };

// let result = isPalindrome("arpita");
// console.log(result);