// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  //   if (!tree.value) return true

  //   function IOS(tree, min = -Infinity, max = Infinity) {
  //     if (tree.left) IOS(tree.left, min, tree.value)
  //     if (tree.value >= max || tree.value < min) return false
  //     if (tree.right) IOS(tree.right, tree.value, max)

  //   }
  //   IOS(tree);

  //   return true;
  //   let ans = true;

  function IOS(tree, min = -Infinity, max = Infinity) {
    if (!tree) return true;
    if (tree.value >= max || tree.value < min) return false;
    // console.log("min", min, "value", tree.value, "max", max);
    const left = IOS(tree.left, min, tree.value);
    return left && IOS(tree.right, tree.value, max);
  }
  console.log(IOS(tree));

  return IOS(tree);
}

// Do not edit the line below.
//   exports.BST = BST;
//   exports.validateBst = validateBst;

//     10
//   /    \
//  5      15
// /       / \
// 2      16  22

const root1 = new BST(10);
root1.left = new BST(5);
root1.left.left = new BST(2);
root1.left.left.left = new BST(1);
// root1.left.left.left.right = new BST(-1); // false
root1.left.right = new BST(5);
// root1.left.right.right = new BST(4); // false
root1.right = new BST(15);
root1.right.left = new BST(13);
root1.right.left.right = new BST(14);
root1.right.left.right.left = new BST(9); // false
root1.right.right = new BST(22);
// root1.right.right.left = new BST(23); // false

const root2 = new BST(null);
// root2.left = new BST(5);

validateBst(root1); // true
// validateBst(root2); // true
