/**
 *                       MULTI LEVEL CONDITION
 * 
 */

const price = 5000;

if(price >= 5000){
    // 10% discount
    const discount = 5000 * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}

else{
    console.log(price)
}