function sunsetViews(buildings, direction) {
  // Write your code here.
  if (!buildings.length) return [];
  if (buildings.length === 1) return [0];

  const lookRight = direction === "EAST" ? true : false;

  let tallestInd = lookRight
    ? buildings.lastIndexOf(Math.max(...buildings))
    : buildings.indexOf(Math.max(...buildings));

  let relevant = lookRight
    ? buildings.slice(tallestInd + 1, buildings.length)
    : buildings.slice(0, tallestInd);

  let ans = [tallestInd];
  let nextTallestInd;

  if (lookRight) {
    while (relevant.length > 1) {
      nextTallestInd = relevant.lastIndexOf(Math.max(...relevant));
      //   console.log(nextTallestInd + tallestInd + 1, relevant);
      ans.push(nextTallestInd + tallestInd + 1);
      tallestInd += nextTallestInd + 1;
      relevant = relevant.slice(nextTallestInd + 1, buildings.length);
    }
    !ans.includes(buildings.length - 1) && ans.push(buildings.length - 1);
    // ans.length > 1 && ans.push(buildings.length - 1);
    console.log(ans);
    return ans;
  }

  while (relevant.length >= 1) {
    nextTallestInd = buildings.indexOf(Math.max(...relevant));
    ans.unshift(nextTallestInd);
    relevant = relevant.slice(0, nextTallestInd);
  }
  //   ans.push(buildings.length - 1);
  console.log(ans);
  return ans;
  //   lookRight && ans.unshift(tallestInd);
}

const arr1 = [3, 5, 4, 4, 3, 1, 3, 2];
const east = "EAST";
const west = "WEST";
// sunsetViews(arr1, east); // [1, 3, 6, 7]

// sunsetViews(arr1, west); // [0,1]
const arr2 = [7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5];
sunsetViews(arr2, east); // [4, 5, 6, 7, 11]
