const createFibonacciNumberWithLoop = (to = 5) => {
 const numbers = [0, 1];
 const range = Array.from({ length: to - 2 }, (_, i) => i);
 for (const i of range) {
  const newNumber = numbers.at(-1) + numbers.at(-2);
  numbers.push(newNumber);
 }
 return numbers;
};
//

const findFibonacciNumber = (n = 1) => {
 if (n <= 1) return n;
 return findFibonacciNumber(n - 1) + findFibonacciNumber(n - 2);
};

console.log(createFibonacciNumberWithLoop(10));
console.log(findFibonacciNumber(19));
