// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

function sherlockAndAnagrams(s) {
  // Each duplicated letter is +1, then +1 if there are random letters between them
  // if there are duplicated letters between them (ABBA), +1 for each duplicate
  // if there is a pair overlapping?
  // find all substrings, compare them
  const substrings = [];
  const map = {};
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      substrings.push(str.split("").sort().join(""));
    }
  }
  //   console.log(substrings);
  for (let i of substrings) {
    map[i] ? map[i]++ : (map[i] = 1);
  }
  //   console.log(map);
  let ans = 0;
  for (let i in map) {
    if (map[i] > 1) {
      for (let j = map[i] - 1; j > 0; j--) {
        ans += j;
      }
    }
  }
  console.log(ans);
}

// const str1 = "cdcd";
// sherlockAndAnagrams(str1); // 5

// const str1a = "cddc";
// sherlockAndAnagrams(str1a); // 4

// const str2 = "kkkk";
// sherlockAndAnagrams(str2); // 10

const str3 = "ifailuhkqq";
sherlockAndAnagrams(str3); // 3

// const str4 = "saghas";
// sherlockAndAnagrams(str4); // 5

// const str5 = "astas";
// sherlockAndAnagrams(str5); // 11233 = 5

// const str5a = "astast";
// sherlockAndAnagrams(str5a); // 11122333 = 8

// const str6 = "astrast";
// sherlockAndAnagrams(str6); // 111223444 = 9

// const str7 = "satrast";
// sherlockAndAnagrams(str7); // 111234445 = 9
