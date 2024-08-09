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
    if (temp.value == newNode.value) return undefined;
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
 contain(value) {
  if (!this.length) return false;
  let temp = this.root;
  while (temp) {
   if (temp.value == value) return true;
   const direction = temp.value < value ? 'right' : 'left';
   const directionNode = temp[direction];
   if (directionNode) {
    temp = directionNode;
    continue;
   } else {
    return false;
   }
  }
  return false;
 }
 min(root) {
  const direction = 'left';
  let temp = root ? root : this.root;
  let minValue = temp;
  if (!temp) return minValue;
  while (temp) {
   temp = temp[direction];
   if (!temp) break;
   minValue = temp;
  }
  return minValue;
 }
 max(root) {
  const direction = 'right';
  let temp = root ? root : this.root;
  let maxValue = temp;
  if (!temp) return maxValue;
  while (temp) {
   temp = temp[direction];
   if (!temp) break;
   maxValue = temp;
  }
  return maxValue;
 }
}

const testTree = new SBT();

testTree.insert(12);
testTree.insert(14);
testTree.insert(8);
testTree.insert(7);
testTree.insert(5);
testTree.insert(2);
testTree.insert(22);

console.log(testTree.min());
console.log(testTree.max());
