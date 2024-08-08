class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class LinkedList {
 constructor(value) {
  const newNode = new Node(value);
  this.head = newNode;
  this.tail = newNode;
  this.length = 1;
 }
 getSearchIndex(index) {
  return index >= 0 ? index : this.length + index;
 }
 get(index) {
  const searchIndex = this.getSearchIndex(index);
  if (searchIndex < 0) return undefined;
  let foundNode = this.head;
  for (let i = 0; i < searchIndex; i++) {
   foundNode = foundNode.next;
  }
  return foundNode;
 }
 set(index, value) {
  const foundNode = this.get(index);
  if (!foundNode) return false;
  foundNode.value = value;
  return true;
 }
 push(value) {
  const newNode = new Node(value);
  this.tail.next = newNode;
  this.tail = newNode;
  ++this.length;
  return true;
 }
 pop() {
  if (!this.length) return undefined;
  let removedItem = this.head;
  let prevItem = null;
  while (removedItem.next) {
   prevItem = removedItem;
   removedItem = removedItem.next;
  }
  if (!prevItem) {
   this.head = null;
  }
  this.tail = prevItem;
  if (prevItem) prevItem.next = null;
  --this.length;
  removedItem.next = null;
  return removedItem;
 }
 unshift(value) {
  const newNode = new Node(value);
  if (!this.length) {
   this.tail = newNode;
  }
  newNode.next = this.head;
  this.head = newNode;
  ++this.length;
  return true;
 }
 shift() {
  if (!this.length) return undefined;
  const removedItem = this.head;
  this.head = this.head.next;
  if (!this.head) this.tail = null;
  --this.length;
  removedItem.next = null;
  return removedItem;
 }
 remove(index) {
  const searchIndex = this.getSearchIndex(index);
  if (searchIndex < 0) return undefined;
  if (searchIndex == 0) return this.shift();
  if (searchIndex == this.length - 1) return this.pop();
  const preNode = this.get(index - 1);
  const removedNode = preNode.next;
  preNode.next = removedNode.next;
  removedNode.next = null;
  return removedNode;
 }
 insert(index, value) {
  const searchIndex = this.getSearchIndex(index);
  if (searchIndex == 0) return this.unshift(value);
  if (searchIndex == this.length) return this.push(value);
  const prevNode = this.get(index - 1);
  const nextNode = prevNode.next;
  const newNode = new Node(value);
  prevNode.next = newNode;
  newNode.next = nextNode;
  ++this.length;
  return true;
 }
 reverse() {
  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;
  let prevNode = null;
  let nextNode = temp.next;
  while (temp) {
   nextNode = temp.next;
   temp.next = prevNode;
   prevNode = temp;
   temp = nextNode;
  }
  return this;
 }
}

const testList = new LinkedList(12);
testList.push(15);
testList.unshift(10);
testList.shift();
testList.set(0, 13);
console.log(testList);
testList.insert(0, 22);
console.log(testList);
console.log(testList.reverse());
