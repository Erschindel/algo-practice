function bubbleSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let selected = -Infinity;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > selected) {
        selected = array[j];
      }
    }
    const removed = array.splice(array.indexOf(selected), 1)[0];
    array.push(removed);
  }
  console.log(array.reverse());
  return array.reverse();
}

const arr1 = [8, 5, 2, 9, 5, 6, 3];
bubbleSort(arr1); // [2, 3, 5, 5, 6, 8, 9]
