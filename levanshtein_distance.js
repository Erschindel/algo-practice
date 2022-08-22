function levenshteinDistance(str1, str2) {
  // Write your code here.
  // turning the first string into the second string
  // three operations: insertion, deletion, substitution

  // insert or delete appropriate characters to get the right length
  //  if str1 is longer than str2, delete non-matching characters
  //    okay to go from left to right?
  //  else, add characters that don't match
  // count remaining differences (don't need to actually substitute)

  let count = 0,
    newStr = "",
    goalStr = str2;

  if (str1.length > str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
        // find a letter in str1 that isn't in str2 and remove it from str1
      }
    }
  }

  return count;
}

const str1 = ["abc", "yabd"];
levenshteinDistance(...str1); // 2

const str1a = ["abc", "abdy"];
levenshteinDistance(...str1a); // 2

const str2 = ["abcdefghij", "1234567890"];
levenshteinDistance(...str2); // 10

const str3 = ["biting", "mitten"];
levenshteinDistance(...str3); // 4

const str4 = ["cereal", "saturday"];
levenshteinDistance(...str4); // 6

const str5 = ["cereal", "saturdzz"];
levenshteinDistance(...str5); // 7

const str6 = ["aacereal", "cereal"];
levenshteinDistance(...str6); // 2
