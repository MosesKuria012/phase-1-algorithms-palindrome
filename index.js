function isPalindrome(word) {
  let length = word.length
  for (let i = 0; i<length/2; i++){
    if (word[i] !== word[length-1-i]){
    return false 
  }  {
    return true
  }
  }
}
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('a')); // true
console.log(isPalindrome('robot')); // false
console.log(isPalindrome('ab')); // false
  // Write your algorithm here
/*
  1. Define a function called isPalindrome that takes a string as its input.
2. Initialize a variable called length to the length of the input string.
3. Loop through the first half of the string from the beginning and end.
   - For each iteration, compare the i-th character from the start and the end of the string (i.e., str[i] and str[length-1-i]).
   - If the characters don't match, the string is not a palindrome, so return false.
4. If all characters match, the string is a palindrome, so return true.
*/


/* 
  Add your pseudocode here

  function isPalindrome(str):
    // Get the length of the string
    length = str.length
    
    // Loop through the string from the beginning and end
    for i = 0 to length/2:
        // Compare the i-th character from the start and end of the string
        if str[i] != str[length-1-i]:
            // If the characters don't match, the string is not a palindrome
            return false
    
    // If all characters match, the string is a palindrome
    return true

*/

/*
  Add written explanation of your solution here

    // the algoithm Develpment
  // the code begins with a function with a word parameter.
  //secondly the code will define the length of the word and need a for loop to look evaluate the length which will divided in half to compare each side of the word
  // there will be an if statemen to compare the from and the last string of the word and return true if it is a palindrome and false if not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;