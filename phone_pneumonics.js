function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  if (!phoneNumber) return [];
  const presses = {
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: "0",
  };

  //   let ans = [];
  //   let numberLength = 0;

  //   for (let i = 0; i < phoneNumber.length; i++) {
  //     if (phoneNumber[i] === 0 || phoneNumber[i] === 1) numberLength++;
  //     else if (phoneNumber[i] === 7 || phoneNumber[i] === 9) numberLength += 4;
  //     else numberLength += 3;
  //   }

  //   ans = Array(numberLength).fill("");

  let check = [];

  for (let x of phoneNumber) {
    const newVals = presses[x];
    const addedLength = newVals.length;
    for (let i = 0; i < addedLength; i++) {
      check[0] = check[0] + newVals[i];
      if (check[0]) check.push(check[0] + newVals[i]);
      else check.push(newVals[i]);
    }
  }

  //   for (let i = 0; i < phoneNumber.length; i++) {
  //     const currentStr = presses[phoneNumber[i]].split("");
  //     currentStr.forEach((x) => {
  //       const newVal = ans[0] + x;
  //       ans.forEach((_, k) => {
  //         ans[k] = newVal;
  //       });
  //     });
  //   }
  //   console.log(ans);
  //   return ans;
  console.log(check);
  return check;
}

// Do not edit the line below.
// exports.phoneNumberMnemonics = phoneNumberMnemonics;
const val1 = "1905";
phoneNumberMnemonics(val1);
// const val2 = "19";
// phoneNumberMnemonics(val2);
