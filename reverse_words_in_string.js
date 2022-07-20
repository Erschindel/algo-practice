function reverseWordsInString(string) {
  // Write your code here.
  let current = "",
    ans = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " && current.length) {
      ans.unshift(current + " ");
      current = "";
    } else if (string[i] === " ") {
      ans.unshift(" ");
    } else {
      current = current + string[i];
    }
  }

  ans.unshift(current + " ");
  ans = ans.join("");
  return ans.substring(0, ans.length - 1);
}

const str1 = "AlgoExpert is the best!";
reverseWordsInString(str1); // "best! the is AlgoExpert"
const str2 = "..H,, hello 678";
reverseWordsInString(str2); // "678 hello ..H,,"
const str3 = "test        ";
reverseWordsInString(str3); // "        test"
