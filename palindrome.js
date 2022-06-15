function isPalindrome(string) {
  // Write your code here.
  if (string.length === 1) return true;
  let left = 0;
  let right = string.length - 1;
  const lowerStr = string.toLowerCase();
  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) {
      console.log(false);
      return false;
    }
    left++;
    right--;
  }
  console.log(true);

  return true;
}

// Do not edit the line below.
//   exports.isPalindrome = isPalindrome;
const str1 = "abcdcba"; // true
const str2 = "abba"; // true
const str3 = "abca"; // false

isPalindrome(str3);
