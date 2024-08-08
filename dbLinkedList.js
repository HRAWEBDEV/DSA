class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
 }
}

class DBLinkedList {
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
  newNode.prev = this.tail;
  this.tail = newNode;
  ++this.length;
  return true;
 }
 pop() {
  if (!this.length) return undefined;
  let prevItem = this.tail.prev;
  let removedItem = this.tail;
  removedItem.prev = null;
  removedItem.next = null;
  prevItem.next = null;
  this.tail = prevItem;
  return removedItem;
 }
 unshift(value) {
  const newNode = new Node(value);
  if (!this.length) {
   this.tail = newNode;
  }
  this.head.prev = newNode;
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
  if (this.head) this.head.prev = null;
  --this.length;
  removedItem.next = null;
  removedItem.prev = null;
  return removedItem;
 }
 remove(index) {
  const searchIndex = this.getSearchIndex(index);
  if (searchIndex < 0) return undefined;
  if (searchIndex == 0) return this.shift();
  if (searchIndex == this.length - 1) return this.pop();
  const preNode = this.get(index - 1);
  const removedNode = preNode.next;
  const nextNode = removedNode.next;
  preNode.next = nextNode;
  nextNode.prev = preNode;
  removedNode.next = null;
  removedNode.prev = null;
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
  newNode.prev = prevNode;
  nextNode.prev = newNode;
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
   temp.prev = nextNode;
   prevNode = temp;
   temp = nextNode;
  }
  return this;
 }
}

const testList = new DBLinkedList(12);
testList.push(15);
