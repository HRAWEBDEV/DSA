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
 get(key) {
  const hashKey = this._hash(key);
  if (this.dataMap[hashKey]) {
   for (let i = 0; i < this.dataMap.length; i++) {
    const storedItem = this.dataMap[hashKey][i];
    if (storedItem[0] == key) return storedItem[1];
   }
  }
  return undefined;
 }
 keys() {
  let allKeys = [];
  for (let address = 0; address < this.dataMap.length; address++) {
   const targetAddress = this.dataMap[address];
   for (
    let cell = 0;
    cell < (targetAddress ? targetAddress.length : 0);
    cell++
   ) {
    allKeys.push(targetAddress[cell][0]);
   }
  }
  return allKeys;
 }
}

const testHash = new HashTable(7);
testHash.set('nails', 1000);
testHash.set('hooman', 2);
testHash.set('reza', 12);

console.log(testHash.get('reza'));

console.log(testHash.keys());
