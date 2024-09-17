/** Looping Technique
 * 
 * 1. For Loop
 * 2. While Loop
 * 3. Do While --> Ignore
 * 4. For Of --> array loop korar jonno 
 * 5. For In --> object loop korar jonno
 * 
 * */ 


const friends = ['rohim', 'karim', 'torim', 'morim']
for (const friend of friends){
    // console.log (friend);
}

for ( let i = 0; i < 10; i++ ){
    // console.log (i);
    // console.log (friends[i])
}
for ( let i = 0; i < friends.length; i++ ){
    // console.log (i);
    // console.log (friends[i])
}

const number = [12, 45, 89, 35659,32135458, 32635458, 354654]
for ( let i = 0; i < number.length; i++ ){
    console.log ( number[i] )
}