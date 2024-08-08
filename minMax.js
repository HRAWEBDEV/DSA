const numbers = (() => {
 const numbers = [];
 for (const i of Array.from({ length: 8 })) {
  numbers.push(Math.ceil(Math.random() * 16));
 }
 return numbers;
})();
console.log(numbers);
const findMin = () => {
 let min = numbers[0];
 for (const num of numbers) {
  if (num < min) min = num;
 }
 return min;
};

const findMax = () => {
 let max = numbers[0];
 for (const num of numbers) {
  if (num > max) max = num;
 }
 return max;
};

console.log(findMax());
console.log(findMin());
