class Node {
 constructor(value) {
  this.value = value;
  this.left = null;
  this.right = null;
 }
}

class SBT {
 length = 0;
 constructor() {
  this.root = null;
 }
 insert(value) {
  const newNode = new Node(value);
  let temp = this.root;
  if (!temp) {
   this.root = newNode;
  } else {
   while (temp) {
    const direction = temp.value < newNode.value ? 'right' : 'left';
    const directionNode = temp[direction];
    if (directionNode) {
     temp = directionNode;
     continue;
    } else {
     temp[direction] = newNode;
     break;
    }
   }
   this.length++;
   return this;
  }
  return this;
 }
}

const testTree = new SBT();

testTree.insert(12);
testTree.insert(14);
testTree.insert(8);
testTree.insert(7);
console.log(testTree);
