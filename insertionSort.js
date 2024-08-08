const numbers = [];

Array.from({ length: 100 }, (_, i) => i).forEach((i) =>
 numbers.push(Math.ceil(Math.random() * 60))
);

const insertionSort = (numbers) => {
 const copiedNumbers = [...numbers];

 for (let i = 0; i < copiedNumbers.length - 1; i++) {
  for (let j = 0; j < i; j++) {
   const targetValue = copiedNumbers[i];
   if (copiedNumbers[j] > targetValue) {
    copiedNumbers.splice(i, 1);
    copiedNumbers.splice(j, 0, targetValue);
   }
  }
 }
};

console.log(insertionSort());
