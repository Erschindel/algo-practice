function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree.left) inOrderTraverse(tree.left, array);
  array.push(tree.value);
  if (tree.right) inOrderTraverse(tree.right, array);
  //   console.log(array);
  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  array.push(tree.value);
  if (tree.left) preOrderTraverse(tree.left, array);
  if (tree.right) preOrderTraverse(tree.right, array);
  //   console.log(array);
  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  if (tree.left) postOrderTraverse(tree.left, array);
  if (tree.right) postOrderTraverse(tree.right, array);
  array.push(tree.value);
  //   console.log(array);
  return array;
}

// Do not edit the lines below.
//   exports.inOrderTraverse = inOrderTraverse;
//   exports.preOrderTraverse = preOrderTraverse;
//   exports.postOrderTraverse = postOrderTraverse;

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);

// inOrderTraverse(root, []); // [1, 2, 5, 5, 10, 15, 22]
// preOrderTraverse(root, []); // [10, 5, 2, 1, 5, 15, 22]
postOrderTraverse(root, []); // [1, 2, 5, 5, 22, 15, 10]
