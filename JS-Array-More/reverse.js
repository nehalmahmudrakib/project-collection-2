const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log ( numbers );
// numbers.reverse ();
// const reversed = numbers.reverse ()
// console.log ( reversed )

const rev_numbers = [];

for (const num of numbers){
    // console.log (num);
    rev_numbers.unshift (num);
}

// console.log ( rev_numbers )

for (let i = 0; i < numbers.length; i++){
    // const num = numbers[i]
    console.log (i)
}