function powerset(arr, ans = [], building = []) {
  // Write your code here.
  if (!arr.length) {
    ans.push(building);
    console.log("here");
    return ans;
  }

  for (let i = 0; i < arr.length; i++) {
    building.push(arr[i]);
    // console.log(building);
    if (
      ans.toString().includes(building.toString()) &&
      building.length <= arr.length
    ) {
      console.log(building);
      const thing = powerset(arr.slice(i, arr.length), ans, building);
      building.push(thing);
      i--;
      continue;
    } else if (
      !ans.toString().includes(building.toString()) &&
      building.length <= arr.length
    ) {
      ans.push(building);
      i--;
    }

    building = [];
  }
  //     arr.forEach((x, i) => {
  //     building.push(x);
  //     // console.log(building);
  //     if (ans.toString().includes(building.toString())) {
  //       const thing = powerset(arr.slice(i, arr.length), ans, building);
  //       building.push(thing);
  //     }
  //     ans.push(building);
  //     console.log(building);
  //     building = [];
  //   });
  console.log("final", ans.push([]));

  return ans.push([]);
}

const arr1 = [];
powerset(arr1); // [[]]

const arr2 = [1, 2];
powerset(arr2); // [[], [1], [2], [1,2]]

// const arr3 = [1, 2, 3, 4];
// powerset(arr3); // [[], [1], [2], [3], [4], [1,2], [1,3], [1,4], [2,3], [2,4], [3,4], [1,2,3], [1,2,4], [1,3,4], [2,3,4], [1,2,3,4]]
