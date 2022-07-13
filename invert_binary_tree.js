function invertBinaryTree(tree) {
  // Write your code here.
  let left, right;

  if (tree.left) {
    tree.left = invertBinaryTree(tree.left);
    left = tree.left;
  }
  if (tree.right) {
    tree.right = invertBinaryTree(tree.right);
    right = tree.right;
  }

  tree.left = right ? right : null;
  tree.right = left ? left : null;

  return tree;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.left.left = new BinaryTree(4);
tree.left.left.left = new BinaryTree(8);
tree.left.left.right = new BinaryTree(9);
tree.left.right = new BinaryTree(5);
tree.right = new BinaryTree(3);
tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);

invertBinaryTree(tree);
