function isPalindrome(word) {
  // Write your algorithm here
    word = word.toLowerCase();
    const reverse = word.split('').reverse().join('');
    if(word === reverse){
      return true;
    }
    return false;
  }


/* 
  Add your pseudocode here
  Start the `isPalindrome
  make word lower
  split the word
  reverse the characters
  join the characters
  check if word is equal to reverse
  return true if yes
  otherwise return false

*/

/*
  Add written explanation of your solution here
  1. Start the `isPalindrome` function with one input parameter, `word`.
  2. Convert the `word` to lowercase.
  3. Split the `word` into individual characters.
  4. Reverse the characters in the `word`.
  5. Join the reversed characters to form a string.
  6. Check if the original `word` is equal to the reversed `word`.
  7. If they are equal:
     - Return true (indicating that the word is a palindrome).
  8. If they are not equal:
     - Return false (indicating that the word is not a palindrome).
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
