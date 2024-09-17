const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']
const sorted = persons.sort();
console.log (sorted)

// Ascending --> Smaller to Larger
//  Descending --> Larger To Smaller

const numbers = [4, 7, 12, 8, 43, 6, 1];
const numbers_asc = numbers.sort (function (a , b) {return a - b} );
console.log (numbers_asc);
const numbers_dsc = numbers.sort (function (a , b) {return b - a} );
console.log (numbers_dsc);