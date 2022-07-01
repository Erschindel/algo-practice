// Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.

// Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.

// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.

var breakPalindrome = function (palindrome) {
  if (palindrome.length <= 1) return "";
  let ans = "",
    replaced = false;
  for (let i = 0; i < palindrome.length; i++) {
    const newStr =
      palindrome.substring(0, i) +
      "a" +
      palindrome.substring(i + 1, palindrome.length);
    const isNewPalindrome = newStr === newStr.split("").reverse().join("");

    if (!replaced && palindrome[i] !== "a" && !isNewPalindrome) {
      replaced = true;
      ans += "a" + palindrome.substring(i + 1, palindrome.length);
      break;
    }
    ans += palindrome[i];
  }
  //   console.log(
  //     replaced ? ans : palindrome.substring(0, palindrome.length - 1) + "b"
  //   );
  return replaced ? ans : palindrome.substring(0, palindrome.length - 1) + "b";
};

const val1 = "abccba";
breakPalindrome(val1); // "aaccba"
const val2 = "a";
// breakPalindrome(val2); // ""
const val3 = "aba";
// breakPalindrome(val3); // "abb"
