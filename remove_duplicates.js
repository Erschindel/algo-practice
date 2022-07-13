class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Not correct output. this is weird to test

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  if (!linkedList.next) {
    // console.log(linkedList.value);
    return linkedList;
  }

  if (linkedList.next.value > linkedList.value) {
    linkedList.next = removeDuplicatesFromLinkedList(linkedList.next);
  } else {
    return removeDuplicatesFromLinkedList(linkedList.next);
  }
  console.log(linkedList);
  return linkedList;
}

// Do not edit the lines below.
// exports.LinkedList = LinkedList;
// exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

const list1 = new LinkedList(1);
list1.next = new LinkedList(1);
list1.next.next = new LinkedList(1);
list1.next.next.next = new LinkedList(3);
list1.next.next.next.next = new LinkedList(4);
list1.next.next.next.next.next = new LinkedList(4);
list1.next.next.next.next.next.next = new LinkedList(4);
list1.next.next.next.next.next.next.next = new LinkedList(5);
list1.next.next.next.next.next.next.next.next = new LinkedList(6);
list1.next.next.next.next.next.next.next.next.next = new LinkedList(6);
list1.next.next.next.next.next.next.next.next.next.next = null;
removeDuplicatesFromLinkedList(list1); // 1 -> 3 -> 4 -> 5 -> 6 -> null
