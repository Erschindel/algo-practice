// not necessarily square array
function spiralTraverse(array) {
  // Write your code here.
  if (array.length === 0) return [];
  //   if (array.length === 1) return array[0];

  let ans = [],
    left = 0,
    top = 0,
    right = array[0].length - 1,
    bottom = array.length - 1;

  while (left <= right && top <= bottom) {
    console.log(ans);
    for (let i = left; i <= right; i++) {
      ans.push(array[top][i]);
    }
    top++;
    if (bottom < top) break;

    for (let i = top; i <= bottom; i++) {
      ans.push(array[i][right]);
    }
    right--;
    if (right < left) break;
    // if (top < bottom) console.log("pre", ans, left, top, right, bottom);

    for (let i = right; i >= left; i--) {
      ans.push(array[bottom][i]);
    }
    bottom--;
    if (bottom < top) break;

    for (let i = bottom; i >= top; i--) {
      ans.push(array[i][left]);
    }
    left++;
    if (right < left) break;
    // console.log("post", ans, left, top, right, bottom);
  }
  console.log("end", ans);
  return ans;
}

const arr1 = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
// spiralTraverse(arr1); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const arr2 = [
  [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
  [12, 19, 15, 16, 20, 18, 13, 17, 11, 14],
];
// spiralTraverse(arr2); // [4, 2, 3, 6, 7, 8, 1, 9, 5, 10, 14, 11, 17, 13, 18, 20, 16, 15, 19, 12]

const arr3 = [[1], [3], [2], [5], [4], [7], [6]];
spiralTraverse(arr3); // [1, 3, 2, 5, 4, 7, 6]
