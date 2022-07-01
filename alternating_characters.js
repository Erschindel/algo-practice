// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.

function alternatingCharacters(s) {
  // Write your code here
  if (s.length <= 1) return 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
  }
  console.log(count);
  return count;
}

const s1 = "AABABAB";
alternatingCharacters(s1); // 1
const s2 = "ABABAB";
alternatingCharacters(s2); // 0
const s3 = "AABBBABAAB";
alternatingCharacters(s3); // 4
