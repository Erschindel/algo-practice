function top_3_words(str) {
  // exception: empty string
  if (!str) return [];

  // find relevant strings/chunks
  let dict = {},
    count = 0,
    ans = [];
  let arr = str.toLowerCase().match(/[a-zA-Z0-9'+]+/gm);

  // exception: empty array
  if (!arr) return [];

  // remove any lone '. nifty filter trick
  arr = arr
    .join(" ")
    .replace(/[^\w]+'[^\w]+/, "")
    .split(" ")
    .filter((x) => x);

  // exception: array of '
  if (!arr.join(" ").match(/[a-zA-Z0-9+]+/g)) return [];

  // build dict object as a word-counter
  arr.forEach((x) => (!dict[x] ? (dict[x] = 1) : dict[x]++));

  // find top 3 highest values in dict w/o sort
  while (Object.keys(dict).length && count < 3) {
    let top;

    Object.keys(dict).forEach((x) => {
      !top || dict[x] > dict[top] ? (top = x) : null;
    });

    ans.push(top);
    delete dict[top];
    count++;
  }
  console.log(ans);
  return ans;
}

// Laurynn answer:

function topThreeWords(text) {
  //let words = text.split(' ');
  let finalArr = [];

  let frequency = text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      word = word.replace(/[^\w']+/, "");
      word = word.replace(/(^')|('$)/, "");
      return word;
    })
    .filter((word) => word)
    .reduce((freqObj, word) => {
      if (!freqObj[word]) {
        freqObj[word] = 1;
      } else {
        freqObj[word]++;
      }
      return freqObj;
    }, {});

  let wordNum = Object.entries(frequency).sort((a, b) => a[1] - b[1])

  for (let i = wordNum.length - 1; i >= 0; i--) {
    finalArr.push(wordNum[i][0]);
  }
  console.log(finalArr.slice(0, 3));
  return finalArr.slice(0, 3);
}

const val1 =
  "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, can't and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";
const val2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
const val3 = "  //wont won't won't";
const val4 = "  ' ' ' '' ";
const val5 = "  ... ";

topThreeWords(val5);
// top_3_words(val1);
