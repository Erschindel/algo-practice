function makeAnagram(a, b) {
  // Write your code here
  let count = 0,
    shorter = a.length > b.length ? b : a,
    longer = a.length > b.length ? a : b;

  for (let i of shorter) {
    if (longer.includes(i)) {
      longer = longer.replace(i, "");
    } else {
      count++;
    }
  }
  console.log(count + longer.length);
  console.log(longer);
  return count + longer.length;
}

const a1 = "cde";
const b1 = "dcf";
// makeAnagram(a1, b1); // 2 (2 deletions )
const a2 = "cde";
const b2 = "abc";
// makeAnagram(a2, b2); // 4

const a3 = "cdecef";
const b3 = "abcf";
makeAnagram(a3, b3); // 6
