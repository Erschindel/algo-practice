class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left = this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right = this.right.insert(value);
      }
    }
    // Do not edit the return statement of this method.
    // console.log("end", this);
    return this;
  }

  contains(value) {
    // Write your code here.
    let contained = false;
    if (this.value === value) {
      contained = true;
    } else if (this.left && this.value > value) {
      return this.left.contains(value);
    } else if (this.right && this.value <= value) {
      return this.right.contains(value);
    }
    console.log("contains", contained);
    return contained;
  }

  remove(value) {
    // Write your code here.
    function findNode(tree, value) {
      if (tree.value === value) return tree;
      if (tree.value > value) {
        return findNode(tree.left, value);
      } else {
        return findNode(tree.right, value);
      }
    }

    if (this.value === value) {
      let removed = this.value;
      let replace,
        distance = Infinity;
    }
    // } else if (this.left && this.value > value) {
    //   return this.left.remove(value);
    // } else if (this.right && this.value <= value) {
    //   return this.right.remove(value);
    // }
    // console.log("remove", this);

    // Do not edit the return statement of this method.
    return this;
  }
}

// Do not edit the line below.
//   exports.BST = BST;

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

root.insert(12);
// console.log("post", root.right);
root.remove(10);
console.log(root);
