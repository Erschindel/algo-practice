// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    if (!this.name) return [];
    if (array.length === 0) array.push(this.name);
    this.children &&
      this.children.forEach((x) => {
        array.push(x.name);
        if (x.children) return x.depthFirstSearch(array);
        return x;
      });
    console.log(array);
    return array;

    // return this.children.map((x) => {
    //   array.push(x.name);
    //   if (x.children) return x.depthFirstSearch(array);
    //   return x;
    // });
  }
}

// Do not edit the line below.
//   exports.Node = Node;

const graph = new Node("A");
graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

graph.depthFirstSearch([]); // ['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']
