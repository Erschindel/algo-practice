function runLengthEncoding(str) {
  // Write your code here.
  let ans = "",
    count = 1;

  for (let i = 0; i < str.length; i++) {
    if (count === 9) {
      ans = ans + count + str[i];
      count = 1;
    } else if (str[i] === str[i + 1]) count++;
    else {
      ans = ans + count + str[i];
      count = 1;
    }
  }
  console.log(ans);
  return ans;
}

const str1 = "AAAAAAAAAAAAABBCCCCDD";
runLengthEncoding(str1); // 9A4A2B4C2D

const str2 = "aA";
runLengthEncoding(str2); // 1a1A
