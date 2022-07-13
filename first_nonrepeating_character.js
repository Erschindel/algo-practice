function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const memo = [];
  for (let i = 0; i < string.length; i++) {
    const remaining = string.substring(i + 1, string.length);
    if (!remaining.includes(string[i]) && !memo.includes(string[i])) return i;
    !memo.includes(string[i]) && memo.push(string[i]);
  }
  return -1;
}

const str1 = "abcdcaf";
firstNonRepeatingCharacter(str1); // 1
