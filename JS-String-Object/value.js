const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000
}

person.salary = 30000;
person['age'] = 30;

// console.log(person);

const keyname = ['profession'];

// console.log (person[keyname]);


const propName = 'profession';
person[propName] = 'Devofas'
console.log (person);