function isPalindrome(string) {
  arrayString = string.split("");// ["h", "e", "l", "l", "o"]
  reversedArray = arrayString.reverse();// ["o", "l", "l", "e", "h"]
  reversedString = reversedArray.join("");// "olleh"

  if (string == reversedString) {
    console.log(string + " is a Palindrome.");
    console.log(string + " = " + reversedString);
  } else {
    console.log(string + " is not a Palindrome.");
    console.log(string + " != " + reversedString);
  }
}

isPalindrome("level");
isPalindrome("zero");
