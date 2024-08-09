class HashTable {
 constructor(size) {
  this.dataMap = new Array(size);
 }
 _hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
   hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
  }
  return hash;
 }
 set(key, value) {
  const hashKey = this._hash(key);
  if (!this.dataMap[hashKey]) this.dataMap[hashKey] = [];
  this.dataMap[hashKey].push([key, value]);
  return this;
 }
}

const testHash = new HashTable(7);
testHash.set('nails', 1000);
