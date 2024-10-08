class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Queue {
 constructor(value) {
  const newNode = new Node(value);
  this.top = newNode;
  this.length = 1;
 }
 enQueue(value) {
  const newNode = new Node(value);
  newNode.next = this.top;
  this.top = newNode;
  this.length++;
  return this;
 }
 deQueue() {
  if (!this.length) return undefined;
  const removedItem = this.top;
  this.top = this.top.next;
  removedItem.next = null;
  this.length--;
  return removedItem;
 }
}
