// 1 , 2 , 3 , 4 ,5

function factorail(n) {
 if (n == 1) return n;
 return n * factorail(n - 1);
}

console.log(factorail(4));
