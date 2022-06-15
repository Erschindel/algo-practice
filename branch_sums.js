// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  if (!root) return [];
  let ans = [];
  let visited = [];
  let complete = [];
  //   const rootVal = root.value;
  function nextNode(tree, sum = 0) {
    sum += tree.value;
    if (tree.left && tree.right) {
      if (!visited.includes(tree.value) && !complete.includes(tree.value)) {
        // console.log("both, left", tree.value);
        visited.push(tree.value);
        console.log("added", visited);
        nextNode(tree.left, sum);
      } else if (complete.includes(tree.value)) {
        nextNode(tree.right, sum);
      } else if (visited[visited.length - 1] === tree.value) {
        complete.push(visited.pop());
        console.log("removed", visited);
        console.log("complete", complete);
        nextNode(tree.right, sum);
      } else {
        // console.log("both, right", tree.value);
        // visited.splice(visited.indexOf(tree.value), 1);
        // console.log(tree.value);
        nextNode(tree.left, sum);
      }
    } else if (tree.left) {
      nextNode(tree.left, sum);
    } else if (tree.right) {
      nextNode(tree.right, sum);
    } else {
      ans.push(sum);
      if (visited.length) {
        nextNode(root);
      }
    }
  }
  nextNode(root);
  console.log("ans", ans);
  return ans;
}

// Do not edit the lines below.
//   exports.BinaryTree = BinaryTree;
//   exports.branchSums = branchSums;

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);
tree.left.left.left = new BinaryTree(8);
tree.left.left.right = new BinaryTree(9);
tree.left.right.left = new BinaryTree(10);
// tree.left.right.right = new BinaryTree(11);
branchSums(tree); // [15, 16, 18, 10, 11]
