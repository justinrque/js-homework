function isPalindrome(string) {
  arrayString = string.split("");
  reversedArray = arrayString.reverse();
  reversedString = reversedArray.join("");

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
