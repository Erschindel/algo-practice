// Given two strings, determine if they share a common substring. A substring may be as small as one character.

function twoStrings(s1, s2) {
  // Write your code here
  const shorter = s1.length < s2.length ? s1 : s2;
  const longer = s1.length < s2.length ? s2 : s1;
  let ans = "NO";
  for (let x of shorter) {
    if (longer.includes(x)) {
      ans = "YES";
      break;
    }
  }
  //   console.log(ans);
  return ans;
}

const s1a = "hello";
const s1b = "world";
twoStrings(s1a, s1b); // "YES"
const s2a = "hi";
const s2b = "world";
twoStrings(s2a, s2b); // "NO"
const s3a = "aaaaaaa";
const s3b = "bbbbbb";
twoStrings(s3a, s3b); // "NO"
const s4a = "aaaaaaa";
const s4b = "bbbbbba";
twoStrings(s4a, s4b); // "YES"
