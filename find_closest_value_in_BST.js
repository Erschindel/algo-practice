function findClosestValueInBst(tree, target, closest = Infinity) {
  // Write your code here.
  if (!tree) return closest;

  if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
    closest = tree.value;
    // return findClosestValueInBst(tree, target, closest);
  }
  if (target < tree.value) {
    // console.log("left", closest);
    return findClosestValueInBst(tree.left, target, closest);
  } else if (target > tree.value) {
    // console.log("right", closest);
    return findClosestValueInBst(tree.right, target, closest);
  } else {
    // console.log("end", closest);
    return closest;
  }
  //   let flatTree = [];
  //   if (!tree) return undefined;
  //   function IOS(branch) {
  //     if (branch.left) {
  //       IOS(branch.left);
  //     }
  //     if (branch.value) {
  //       flatTree.push(branch.value);
  //     }
  //     if (branch.right) {
  //       IOS(branch.right);
  //     }
  //     return;
  //   }
  //   IOS(tree);

  //   let gap = undefined;
  //   console.log(
  //     flatTree.reduce((acc, x) => {
  //       //   console.log(x);
  //       if (!gap || Math.abs(target - x) < gap) {
  //         gap = Math.abs(target - x);
  //         acc = x;
  //       }
  //       return acc;
  //     }, 0)
  //   );
  //   gap = target;
  //   return flatTree.reduce((acc, x) => {
  //     if (Math.abs(target - x) < gap) {
  //       gap = target - x;
  //       acc = x;
  //     }
  //     return acc;
  //   }, 0);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
// exports.findClosestValueInBst = findClosestValueInBst;

const tree1 = new BST(10);
tree1.left = new BST(5);
tree1.left.left = new BST(2);
tree1.left.left.left = new BST(1);
tree1.left.left.left.left = new BST(-2); // added
tree1.left.right = new BST(5);
tree1.right = new BST(15);
tree1.right.left = new BST(13);
tree1.right.left.right = new BST(14);
tree1.right.right = new BST(22);

const tree2 = new BST(10);
// tree2.left = new BST(5);
// tree2.left.left = new BST(2);
// tree2.left.left.left = new BST(1);
// tree2.left.left.left.left = new BST(-2); // added
// tree2.left.right = new BST(5);
// tree2.right = new BST(15);
// tree2.right.left = new BST(13);
// tree2.right.left.right = new BST(14);
// tree2.right.right = new BST(22);
const tree3 = undefined;

const target1 = 12;
const target2 = 6;
const target3 = -1;
findClosestValueInBst(tree1, target1); // 13
// findClosestValueInBst(tree1, target2); // 5
// findClosestValueInBst(tree1, target3); // -2
// findClosestValueInBst(tree2, target3); // 10
// findClosestValueInBst(tree3, target3); // 10
