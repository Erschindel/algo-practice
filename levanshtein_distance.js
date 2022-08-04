function levenshteinDistance(str1, str2) {
  // Write your code here.
}

const str1 = ["abc", "yabd"];
levenshteinDistance(...str1); // 2

const str2 = ["abcdefghij", "1234567890"];
levenshteinDistance(...str2); // 10

const str3 = ["biting", "mitten"];
levenshteinDistance(...str2); // 4

const str4 = ["cereal", "saturday"];
levenshteinDistance(...str2); // 6

const str5 = ["cereal", "saturdzz"];
levenshteinDistance(...str2); // 7
