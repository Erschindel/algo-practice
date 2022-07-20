function cycleInGraph(edges) {
  // Write your code here.
  for (let i = 0; i < edges.length; i++) {
    if (containsLoop(edges, i)) {
      console.log("front", true);
      return true;
    }
    // console.log("next\n");
  }

  console.log(false);
  return false;
}

function containsLoop(edges, idx, visited) {
  const node = edges[idx];
  if (!node.length) return false;
  //   let ans;

  for (let i = 0; i < node.length; i++) {
    // console.log(i, "---", node[i], "--- visited", visited);
    const newArr = visited.slice();
    newArr.push(node[i]);
    if (visited.includes(node[i]) || containsLoop(edges, node[i], newArr)) {
      return true;
    }
    containsLoop(edges, node[i], newArr);
  }
  return false;
}

const arr1 = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]; // 120,1420,
const arr2 = [[], [0], [0], [0]];

// cycleInGraph(arr1); // true
const arr3 = [[1], [0], [0], [0]];

const arr4 = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], []];
// cycleInGraph(arr4); // false

const arr5 = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], [0]]; // 170
cycleInGraph(arr5); // true
