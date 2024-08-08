const numbers = [];

Array.from({ length: 100 }, (_, i) => i).forEach((i) =>
 numbers.push(Math.ceil(Math.random() * 60))
);

const selectionSort = (numbers) => {
 const copiedNumbers = [...numbers];
 for (let i = 0; i < copiedNumbers.length - 1; i++) {
  for (let j = i + 1; j <= copiedNumbers.length - 1; j++) {
   const minValue = copiedNumbers[i];
   if (copiedNumbers[j] < minValue) {
    copiedNumbers[i] = copiedNumbers[j];
    copiedNumbers[j] = minValue;
   }
  }
 }
 return copiedNumbers;
};

console.log(selectionSort(numbers));
