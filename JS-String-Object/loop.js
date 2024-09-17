const mobile = {
    brand: 'apple',
    price: 200000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// For Of: array
// For In : Object

for (const prop in mobile){
    // console.log (prop)
    // console.log  (mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log (key, ':', mobile[key])
}