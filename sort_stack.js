function sortStack(stack, right = 0) {
  // Write your code here.
  //   if (stack.length === 0) return [];
  if (stack.length === 1 || stack.length === 0) return stack;

  const rightMost = stack.pop();
  const nextRight = stack.pop();
  //   console.log(nextRight, rightMost);

  if (rightMost < nextRight) {
    stack.push(rightMost);
    // console.log("top", stack);
    const sorted = sortStack(stack);
    // console.log("sorted top: ", sorted);

    return sorted.push(nextRight);
  } else {
    // console.log(nextRight, rightMost);
    // const thirdRight = stack.pop()
    stack.push(nextRight);
    right = rightMost;
    console.log("bottom", stack);

    const sorted = sortStack(stack);
    console.log("sorted bottom: ", sorted);
    sorted.push(rightMost);
    return sorted;
    // stack.push();
  }
}

// Do not edit the line below.
// exports.sortStack = sortStack;

const arr1 = [-5, 2, -2, 4, 3, 1];
sortStack(arr1); // [-5, -2, 1, 2, 3, 4]
