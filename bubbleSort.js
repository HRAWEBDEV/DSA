const numbers = [];

Array.from({ length: 100 }, (_, i) => i).forEach((i) =>
 numbers.push(Math.ceil(Math.random() * 60))
);

const bubbleSort = (numbers) => {
 const copyNumbers = [...numbers];
 for (let i = 0; i < copyNumbers.length - 1; i++) {
  let swapped = false;
  for (let j = 0; j < copyNumbers.length - i - 1; j++) {
   swapped = true;
   if (copyNumbers[j] > copyNumbers[j + 1]) {
    const numCopy = copyNumbers[j];
    copyNumbers[j] = copyNumbers[j + 1];
    copyNumbers[j + 1] = numCopy;
   }
   if (!swapped) break;
  }
 }
 return copyNumbers;
};

console.log(bubbleSort(numbers));
