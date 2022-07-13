// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

function checkMagazine(magazine, note) {
  // Write your code here

  if (note.length === 0 || magazine.join(" ") === note.join(" ")) {
    console.log("Yes");
    return "Yes";
  }
  if (magazine.length === 0 || magazine.length < note.length) {
    console.log("No");
    return "No";
  }
  let ans = true;
  note.forEach((x) => {
    if (magazine.includes(x)) {
      magazine.splice(magazine.indexOf(x), 1);
    } else {
      ans = false;
    }
  });
  console.log(ans ? "Yes" : "No");
  return ans ? "Yes" : "No";
}

const m1 = "give me one grand today night".split(" ");
const n1 = "give one grand today".split(" ");
checkMagazine(m1, n1); // "Yes"
// const m2 = "two times three is not four".split(" ");
// const n2 = "two times two is four".split(" ");
// checkMagazine(m2, n2); // "No"
// const m3 = "ive got a lovely bunch of coconuts".split(" ");
// const n3 = "ive got some coconuts".split(" ");
// checkMagazine(m3, n3); // "No"
const m4 = "attack at dawn".split(" ");
const n4 = "Attack at dawn".split(" ");
checkMagazine(m4, n4); // "No"
