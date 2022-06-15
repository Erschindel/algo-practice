function nodeDepths(root, level = 0) {
  // Write your code here.
  let leftSum = 0;
  let rightSum = 0;

  if (!root.left && !root.right) return level;
  if (root.left) leftSum += nodeDepths(root.left, level + 1);
  if (root.right) rightSum += nodeDepths(root.right, level + 1);
  //   console.log("sum:", leftSum + rightSum);
  return leftSum + rightSum + level;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
//   exports.nodeDepths = nodeDepths;

const root1 = new BinaryTree(1);
root1.left = new BinaryTree(2);
root1.left.left = new BinaryTree(4);
root1.left.left.left = new BinaryTree(8);
root1.left.left.right = new BinaryTree(9);
root1.left.right = new BinaryTree(5);
root1.right = new BinaryTree(3);
root1.right.left = new BinaryTree(6);
root1.right.right = new BinaryTree(7);

nodeDepths(root1); // 16

//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
//   / \
//  8   9

const root2 = new BinaryTree(1);
root2.left = new BinaryTree(2);
// root2.left.left = new BinaryTree(4);
root2.right = new BinaryTree(3);

// nodeDepths(root2); // 2
