// given a string, write a function that determines whether the string is a palindrome
// returns True/False

// could be an empty string
// could be even or odd
// alphanumeric, no spaces

function palindrome(str) {
  if (!str.length) return false;

  const strLower = str.toLowerCase();

  let right = strLower.length - 1;
  let left = 0;

  while (left < right) {
    if (strLower[left] !== strLower[right]) {
      return false;
    }
    right--;
    left++;
  }

  //    for (let i = 0; i < strLower .length - 1; i++){
  //        if(strLower [i] !== strLower [right]({
  //            right--
  //            return false
  //        }
  //    }

  return true;
}

const str1 = "abcdcba"; // true
// const str2 = "AbBa";

// const str3 = "Did Hannah see bees? Hannah, did!";

palindrome(str1);
// // POST //

// should have asked:
// does a single character return true?
// capitalization
// single character returns true?
// make shorter examples
