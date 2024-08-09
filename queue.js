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
  this.bottom = newNode;
  this.length = 1;
 }

 push(value) {
  const newNode = new Node(value);
  if (!this.length) {
   this.top = newNode;
   this.bottom = newNode;
  } else {
   this.bottom.next = newNode;
   this.bottom = newNode;
  }
  ++this.length;
  return this;
 }
 pop() {
  if (!this.length) return undefined;
  const removedItem = this.top;
  this.top = removedItem.next;
  if (!this.top) this.bottom = null;
  removedItem.next = null;
  --this.length;
  return removedItem;
 }
}
