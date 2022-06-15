function spiral(val) {
  let topL = 0,
    topR = val - 1,
    rightT = 0,
    rightB = val,
    ans = [];

  for (let i = 0; i < val; i++) {
    // make array of arrays of 0s
    ans.push([]);
    for (let _ = 0; _ < val; _++) {
      ans[i].push(0);
    }
  }

  while (topL < topR || rightT < rightB) {
    // right
    for (let i = topL; i <= topR; i++) {
      ans[rightT][i] = 1;
    }
    rightT++;
    rightB--;
    if (rightT >= rightB && val % 4 === 1) break; // 5, 9, 13, etc end on right

    // down
    for (let i = rightT; i <= rightB; i++) {
      ans[i][topR] = 1;
    }
    topR--;
    if (topL > 0) topL++; // skip first increment of topL
    if (topL >= topR && val % 4 === 2) break; // 6, 10, 14, etc end on down

    // left
    for (let i = topR; i >= topL; i--) {
      ans[rightB][i] = 1;
    }
    rightB--;
    rightT++;
    if (rightT >= rightB && val % 4 === 3) break; // 7, 11, 15, etc end on left

    // up
    for (let i = rightB; i >= rightT; i--) {
      ans[i][topL] = 1;
    }
    topL++;
    topR--;
  }

  console.log(ans);
  return ans;
}

const val1 = 6;

spiral(val1);
