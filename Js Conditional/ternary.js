/**
 * 
 *  TERNARY ==> THREE PARTS
 * 
 *   ?  :
 * 
 *   condition ? do something when true : do something when false
 * 
 * */ 

const age = 12;


// NORMAL IF ELSE
// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('jaw baba ghumaw');
// }


// SIMPLE TERNARY
// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100